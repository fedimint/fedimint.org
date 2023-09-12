import styles from "./styles.module.css";
import React, { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import { aiChatAtom, messagesAtom } from "../state";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";
import { Trash, User, X } from "react-feather";
import QRCode from 'react-qr-code'
import { WebLNProvider } from 'webln'
import { Invoice } from "alby-tools";

export interface MessageType {
  role: "system" | "user";
  message: string;
}

declare global {
  interface Window {
    webln?: WebLNProvider
  }
}

function Message({ role, message }: MessageType) {
  const content = DOMPurify.sanitize(marked.parse(message));

  return (
    <div
      className={
        styles.message + (role === "system" ? " " + styles.system : "")
      }
    >
      <div className={styles.messageUser}>
        {role === "system" ? (
          <img src="/img/fedimint-icon.png" width="24" height="24" />
        ) : (
          <User size={24} />
        )}
      </div>
      <div
        className={styles.messageContent}
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </div>
  );
}

export default function AIChat() {
  const [, setAIChat] = useAtom(aiChatAtom);
  const [messages, setMessages] = useAtom(messagesAtom);
  const [text, setText] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [lnPaymentRequest, setLnPaymentRequest] = useState('');

  const [loading, setLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const visibilityRef = useRef<HTMLDivElement>(null);

  const requestAIResponse = async ({ pr, verify }: { pr: string; verify?: string }) => {
    const data = await fetch("/prompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        prompt: text,
        history: messages.map((m) => m.message),
        pr,
        verify
      }),
    })
      .then((res) => res.json())

    if (data.success) {
      setMessages((messages) => [
        ...messages,
        { role: "system", message: data.message },
      ]);
      setText("");
      setLoading(false);
    } else {
      setMessages((messages) => [
        ...messages,
        { role: "system", message: `An error occurred: ${data.error}` },
      ])
      setText("");
      setLoading(false);
    }
  }

  const submit = async () => {
    setMessages((messages) => [...messages, { role: "user", message: text }]);

    setLoading(true);

    const invoiceRes: Invoice = await fetch("/invoice", {
      method: "POST"
    }).then(r => r.json());

    const invoice = new Invoice({ pr: invoiceRes.paymentRequest, verify: invoiceRes.verify || undefined });

    if (typeof window.webln === "undefined") {
      setLnPaymentRequest(invoice.paymentRequest);
      dialogRef.current?.showModal();
    } else {
      try {
        await window.webln.enable();
        await window.webln.sendPayment(invoice.paymentRequest);
      } catch (e: any) {
        console.error(e);
        setMessages((messages) => [
          ...messages,
          { role: "system", message: String(e) },
        ]);
        setText("a");
        setLoading(false);
        return;
      }
    }

    const payCheckInterval = setInterval(() => {
      invoice
        .isPaid()
        .then(paid => {
          if (paid) {
            clearInterval(payCheckInterval);
            dialogRef.current?.close();
            requestAIResponse({ pr: invoice.paymentRequest, verify: invoice.verify });
          }
        })
        .catch(e => {
          console.error(e);
          dialogRef.current?.close();
          setMessages((messages) => [
            ...messages,
            { role: "system", message: String(e) },
          ]);
          setText("b");
          setLoading(false);
          clearInterval(payCheckInterval);
        });
    }, 1000);


  };

  const copyInvoice = () => {
    navigator.clipboard.writeText(lnPaymentRequest).then(() => {
      alert("Copied")
    })
  }

  useEffect(() => {
    if (!loading) {
      inputRef.current?.focus();
    }
  }, [loading]);

  useEffect(() => {
    visibilityRef?.current?.scrollIntoView();
  }, [messages]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.overlay} onClick={() => setAIChat(false)} />

        <div className={styles.chat}>
          <div className={styles.header}>
            <span>Fedimint Bot</span>

            <div style={{ flexGrow: 1 }} />

            <button className={styles.iconButton} onClick={() => setMessages([])}>
              <Trash size={16} />
            </button>

            <button
              className={styles.iconButton}
              onClick={() => setAIChat(false)}
            >
              <X size={20} />
            </button>
          </div>

          <div className={styles.messageContainer}>
            <div className={styles.messages}>
              {messages.map((m, i) => (
                <Message {...m} key={i} />
              ))}
              <div ref={visibilityRef} />
            </div>
          </div>

          <div className={styles.input}>
            <input
              type="text"
              placeholder="Ask a question..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && text.length >= 1) {
                  submit();
                }
              }}
              disabled={loading}
              ref={inputRef}
            />
            <button
              onClick={submit}
              disabled={text.length < 2 || loading}
              className={styles.submit}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <dialog ref={dialogRef}>
        <div style={{
          display: 'flex',
          gap: 8,
          flexDirection: 'column'
        }}>
          <QRCode value={lnPaymentRequest} size={200} />

          <button onClick={copyInvoice}>Copy Invoice</button>

          <form method="dialog">
            <button>Cancel</button>
          </form>
        </div>
      </dialog>
    </>
  );
}
