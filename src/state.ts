import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { MessageType } from "./AIChat";

export const aiChatAtom = atom<boolean>(false);
export const messagesAtom = atomWithStorage<Array<MessageType>>("messages", []);
