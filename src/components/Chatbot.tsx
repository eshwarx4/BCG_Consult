import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Cpu, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const ChatbotInterface = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'bot',
            text: "Hello! I'm your AI Farming Assistant. How can I help you today?",
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const chatContainerRef = useRef(null);
    const suggestionsContentRef = useRef(null);

    const suggestedQuestions = [
        "How do I protect my crops from pests?",
        "What are the best crops for this season?",
        "How can I improve soil fertility naturally?",
        "Weather forecast for my farm",
        "Financial assistance programs for farmers"
    ];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Handle resize of chat window
    useEffect(() => {
        if (isOpen && chatContainerRef.current) {
            // Set focus to input when chat opens
            const inputElement = chatContainerRef.current.querySelector('input');
            if (inputElement) inputElement.focus();
        }
    }, [isOpen]);

    const handleSend = () => {
        if (inputValue.trim() === '') return;

        // Add user message
        const userMessage = {
            id: messages.length + 1,
            sender: 'user',
            text: inputValue,
            timestamp: new Date()
        };

        setMessages([...messages, userMessage]);
        setInputValue('');
        setLoading(true);

        // Simulate bot response after a delay
        setTimeout(() => {
            const botResponses = {
                "How do I protect my crops from pests?": "For natural pest control, consider companion planting with marigolds or neem, introducing beneficial insects like ladybugs, or using organic pesticides. For specific pests, I can provide targeted advice.",
                "What are the best crops for this season?": "Based on current season (Spring), consider planting tomatoes, peppers, cucumbers, and leafy greens. Would you like specific recommendations for your region?",
                "How can I improve soil fertility naturally?": "Natural methods include crop rotation, cover cropping, adding compost, and using green manures. Regular soil testing can help identify specific deficiencies.",
                "Weather forecast for my farm": "I can provide a 7-day forecast for your farm's location. Would you like to share your location or enter your coordinates/city?",
                "Financial assistance programs for farmers": "There are several programs available including USDA grants, Farm Service Agency loans, and state-specific agricultural aid. I can provide details based on your location."
            };

            const responseText = botResponses[userMessage.text] ||
                "Thank you for your question. I'd be happy to help with information about sustainable farming practices, crop management, or financial planning for your farm. Could you provide more details?";

            const botMessage = {
                id: messages.length + 2,
                sender: 'bot',
                text: responseText,
                timestamp: new Date()
            };

            setMessages(prevMessages => [...prevMessages, botMessage]);
            setLoading(false);
        }, 1000);
    };

    const handleQuestionClick = (question) => {
        setInputValue(question);
        // Use a setTimeout to ensure the input value is updated before sending
        setTimeout(() => {
            handleSend();
        }, 0);
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const toggleSuggestions = () => {
        setShowSuggestions(!showSuggestions);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Chat Button - More compact and visible */}
            {!isOpen && (
                <button
                    onClick={toggleChat}
                    className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                    <MessageCircle className="h-6 w-6" />
                    <span className="hidden md:inline font-medium">Chat with FarmAI</span>
                </button>
            )}

            {/* Chat Window - Better proportions */}
            {isOpen && (
                <div
                    ref={chatContainerRef}
                    className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-sm sm:max-w-md md:max-w-lg flex flex-col border border-gray-200 transition-all duration-300 ease-in-out"
                    style={{ height: 'calc(100vh - 120px)', maxHeight: '600px' }}
                >
                    {/* Chat Header - More polished */}
                    <div className="bg-green-600 text-white p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="bg-white bg-opacity-20 p-1.5 rounded-full">
                                <Cpu className="h-5 w-5" />
                            </div>
                            <h3 className="font-semibold text-lg">Farm AI Assistant</h3>
                        </div>
                        <button
                            onClick={toggleChat}
                            className="text-white hover:text-gray-200 bg-green-700 hover:bg-green-800 rounded-full p-1.5 transition-colors duration-300 ease-in-out"
                            aria-label="Close chat"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Chat Messages - Better spacing and bubbles */}
                    <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`mb-3 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-xs sm:max-w-sm rounded-2xl py-2.5 px-4 ${message.sender === 'user'
                                            ? 'bg-green-600 text-white rounded-br-none shadow-sm'
                                            : 'bg-white border border-gray-200 rounded-bl-none shadow-sm'
                                        }`}
                                >
                                    <p className="text-sm sm:text-base leading-relaxed">{message.text}</p>
                                    <p className={`text-xs mt-1 text-right ${message.sender === 'user' ? 'text-green-100' : 'text-gray-400'
                                        }`}>
                                        {formatTime(message.timestamp)}
                                    </p>
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className="flex justify-start mb-3">
                                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none py-2.5 px-4 shadow-sm">
                                    <div className="flex space-x-1.5">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-100"></div>
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-200"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Suggested Questions - With smooth transition */}
                    <div className="bg-gray-50 border-t border-gray-200">
                        {/* Toggle Header */}
                        <button
                            onClick={toggleSuggestions}
                            className="w-full p-3 flex items-center justify-between hover:bg-gray-100 transition-colors duration-300 ease-in-out"
                        >
                            <div className="flex items-center">
                                {showSuggestions ?
                                    <ChevronUp className="h-4 w-4 text-gray-500 transition-transform duration-300 ease-in-out" /> :
                                    <ChevronDown className="h-4 w-4 text-gray-500 transition-transform duration-300 ease-in-out" />
                                }
                                <span className="text-sm text-gray-600 ml-1 font-medium">Suggested Questions</span>
                            </div>
                            <span className="text-xs text-gray-400">
                                {showSuggestions ? "Hide" : "Show"}
                            </span>
                        </button>

                        {/* Suggestions Content with smooth height transition */}
                        <div
                            className="overflow-hidden transition-all duration-300 ease-in-out"
                            style={{
                                maxHeight: showSuggestions ? '200px' : '0px',
                                opacity: showSuggestions ? 1 : 0
                            }}
                        >
                            <div className="p-3 pt-0">
                                <div className="flex flex-wrap gap-1.5">
                                    {suggestedQuestions.map((question, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleQuestionClick(question)}
                                            className="text-xs sm:text-sm bg-white hover:bg-gray-100 text-gray-800 py-1.5 px-3 rounded-full border border-gray-200 truncate max-w-full transition-colors duration-300 ease-in-out"
                                        >
                                            {question}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chat Input - More polished */}
                    <div className="p-3 bg-white border-t border-gray-200">
                        <div className="flex rounded-full border border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-green-500 focus-within:border-transparent transition-all duration-300 ease-in-out">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Type your message..."
                                className="flex-1 py-2.5 px-4 focus:outline-none text-sm sm:text-base"
                            />
                            <button
                                onClick={handleSend}
                                disabled={inputValue.trim() === ''}
                                className={`px-4 flex items-center justify-center ${inputValue.trim() === ''
                                        ? 'bg-gray-100 text-gray-400'
                                        : 'bg-green-600 text-white hover:bg-green-700'
                                    } transition-colors duration-300 ease-in-out`}
                                aria-label="Send message"
                            >
                                <Send className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatbotInterface;