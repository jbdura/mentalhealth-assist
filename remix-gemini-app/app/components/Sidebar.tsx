import React from "react";
import { Chat } from "./useChatStorage";

interface SidebarProps {
    chats: Chat[];
}

export const Sidebar: React.FC<SidebarProps> = ({ chats }) => (
  <div className="w-64 bg-gray-800 text-white h-full">
      <h2 className="text-lg font-bold p-4">Chat History</h2>
      <ul>
          {chats.map((chat) => (
            <li key={chat.id} className="p-4 border-b border-gray-700">
                {chat.message}
            </li>
          ))}
      </ul>
  </div>
);
