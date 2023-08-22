import styles from "./styles.module.css";
import React, { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import { aiChatAtom, messagesAtom } from "../state";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";
import { Trash, User, X } from "react-feather";

export interface MessageType {
  role: "system" | "user";
  message: string;
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

  const [loading, setLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const visibilityRef = useRef<HTMLDivElement>(null);

  const submit = () => {
    setMessages((messages) => [...messages, { role: "user", message: text }]);

    setLoading(true);

    fetch("https://fedidocsopenai.ironcladdev.repl.co/prompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        prompt: text,
        history: messages.map((m) => m.message),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessages((messages) => [
          ...messages,
          { role: "system", message: data.message },
        ]);
        setText("");
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!loading) {
      inputRef.current?.focus();
    }
  }, [loading]);

  useEffect(() => {
    visibilityRef?.current?.scrollIntoView();
  }, [messages]);

  return (
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
  );
}
