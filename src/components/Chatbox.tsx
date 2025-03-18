import React, { useState } from 'react';
import { User } from '../Interfaces/User';
import { ImagePlus, Send } from 'lucide-react';

interface Message {
  id: string;
  userName: string;
  text: string;
  timestamp: Date;
  isCurrentUser: boolean;
}

interface ChatboxProps {
  currentUser: User;
}

const Chatbox: React.FC<ChatboxProps> = ({ currentUser }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState<string>('');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      userName: currentUser.name,
      text: text,
      timestamp: new Date(),
      isCurrentUser: true,
    };

    setMessages(prev => [...prev, newMessage]);
    setText('');
  };

  return (
    <div className={`flex flex-col h-[60vh] ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      {/* Chat Header */}
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-green-400'} p-4 flex items-center shadow-md`}>
        <p className="text-lg font-semibold">Catatan bacaan</p>
      </div>

      {/* Message Display Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.isCurrentUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`px-4 py-2 max-w-[75%] rounded-lg text-sm ${
                msg.isCurrentUser
                  ? isDarkMode ? 'bg-green-500 text-white' : 'bg-green-300 text-black'
                  : isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800'
              }`}
            >
              <p>{msg.text}</p>
              <p className="text-xs text-gray-500 text-right mt-1">
                {msg.timestamp.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} p-4 flex items-center gap-3`}>
        <ImagePlus className={`${isDarkMode ? 'text-green-400' : 'text-green-600'} text-xl`} />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Update muka-surat"
          className={`flex-1 px-3 py-2 rounded-lg outline-none ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black border border-gray-300'}`}
        />
        <button type="submit" className={`${isDarkMode ? 'text-green-400' : 'text-green-600'} text-xl`}>
          <Send />
        </button>
      </form>
    </div>
  );
};

export default Chatbox;
