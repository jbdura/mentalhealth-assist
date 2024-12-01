import { useState } from "react";

export interface Chat {
    id: string;
    message: string;
    response: string;
}

export const useChatStorage = () => {
    const [chats, setChats] = useState<Chat[]>([]);

    const addChat = (chat: Chat) => {
        setChats((prevChats) => [...prevChats, chat]);
    };

    return { chats, addChat };
};
