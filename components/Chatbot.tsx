
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageProvider';

interface Message {
    sender: 'user' | 'bot';
    text: string;
}

const Chatbot: React.FC = () => {
    const { t, language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [chat, setChat] = useState<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        // Re-initialize chat if the language changes or if it's opened for the first time
        if (isOpen) {
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
                const chatSession = ai.chats.create({
                  model: 'gemini-2.5-flash',
                  config: {
                    systemInstruction: t('chatbot_sys_prompt'),
                  },
                });
                setChat(chatSession);
                setMessages([{ sender: 'bot', text: t('chatbot_greeting') }]);
            } catch (error) {
                console.error("AI Initialization Error:", error);
                setMessages([{ sender: 'bot', text: t('chatbot_error_init') }]);
            }
        }
    }, [isOpen, language, t]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading || !chat) return;

        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const stream = await chat.sendMessageStream({ message: input });
            let botResponse = '';
            // Add a placeholder message for the bot's response
            setMessages(prev => [...prev, { sender: 'bot', text: '' }]);

            for await (const chunk of stream) {
                 botResponse += chunk.text;
                 // Update the last message (the bot's response) in the array
                 setMessages(prev => {
                     const newMessages = [...prev];
                     newMessages[newMessages.length - 1].text = botResponse;
                     return newMessages;
                 });
            }
        } catch (error) {
            console.error("AI Error:", error);
            setMessages(prev => [...prev.slice(0, -1), { sender: 'bot', text: t('chatbot_error_response') }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={t('chatbot_aria_open')}
                    className="p-4 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm shadow-lg hover:scale-110"
                >
                    <FaRobot className="text-2xl" />
                </button>
            </div>
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-[350px] h-[500px] glass-panel rounded-2xl flex flex-col shadow-2xl animate-fade-in">
                    <div className="flex justify-between items-center p-4 border-b border-white/10">
                        <h3 className="font-bold text-white">{t('chatbot_title')}</h3>
                        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                            <FaTimes />
                        </button>
                    </div>
                    <div className="flex-grow p-4 overflow-y-auto space-y-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-xl ${msg.sender === 'user' ? 'bg-white/20 text-white' : 'bg-gray-700/80 text-gray-200'}`}>
                                    {msg.text || (msg.sender === 'bot' && <div className="w-1 h-1"></div>) /* Handle empty initial text */}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                             <div className="flex justify-start">
                                <div className="max-w-[80%] p-3 rounded-xl bg-gray-700/80 text-gray-200">
                                   <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-75"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></div>
                                   </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10 flex items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={t('chatbot_placeholder')}
                            className="flex-grow bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                            disabled={isLoading}
                        />
                        <button type="submit" disabled={isLoading || !input.trim()} className="ml-3 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                            <FaPaperPlane />
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default Chatbot;
