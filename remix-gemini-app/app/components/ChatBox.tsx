import React, { useState } from "react";
import { useApi } from "./useApi";
import { useChatStorage } from "./useChatStorage";
import ReactMarkdown from "react-markdown";

export const ChatBox: React.FC = () => {
    const [input, setInput] = useState("");
    const { sendMessage } = useApi();
    const { chats, addChat } = useChatStorage();

    const handleSend = async () => {
        if (!input) return;
        const response = await sendMessage(input);
        console.log(response); // Log the response structure

        addChat({
            id: Date.now().toString(),
            message: input,
            response: response.data || response.message || "No response", // Adjust based on API
        });
        setInput("");
    };

    return (
      <div className="flex flex-col flex-1 p-4">
          <div className="flex-1 overflow-y-auto">
              {chats.map((chat) => (
                <div key={chat.id} className="my-2">
                    <p className="text-blue-500">User: {chat.message}</p>
                    <p className="text-green-500">Bot: <ReactMarkdown>{chat.response}</ReactMarkdown></p>
                </div>
              ))}
          </div>
          <div className="flex mt-4">
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded p-2"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
              />
              <button
                onClick={handleSend}
                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
              >
                  Send
              </button>
          </div>
      </div>
    );
};
