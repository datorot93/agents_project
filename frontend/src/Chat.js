import React, { useState } from "react";
import axios from "axios";
import btnSend from "./assets/Send.png";
import btnAttach from "./assets/Attach.png";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isSendPressed, setIsSendPressed] = useState(false);
    const [isAttachPressed, setIsAttachPressed] = useState(false);
    const [attachedFiles, setAttachedFiles] = useState([]);

    const handleSend = async () => {
        if (!input.trim() && attachedFiles.length === 0) return;

        const userMessage = { sender: "user", text: input, files: attachedFiles.map(file => file.name)};
        setMessages([...messages, userMessage]);

        //const response = await axios.post("/api/chat", { message: input });
        //const aiMessage = { sender: "ai", text: response.data.reply };

        //setMessages([...messages, userMessage, aiMessage]);
        setInput("");
        setAttachedFiles([]);
    };

    const handleAttachFiles = (event) => {
        const files = Array.from(event.target.files);
        setAttachedFiles([...attachedFiles, ...files]);
    };

    const commonButtonStyle = (isPressed) => ({
        padding: '10px',
        borderRadius: '4px',
        boxShadow: isPressed ? 'inset 0 3px 5px rgba(0, 0, 0, 0.2)' : '0 3px 5px rgba(0, 0, 0, 0.2)',
        transition: 'box-shadow 0.2s',
        border: 'none',
    });

    return (
        <div className="mx-auto mt-10 p-4 bg-white rounded shadow-md" id="chat-container">
            <div className="chat-box h-96 overflow-y-scroll p-4 rounded">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`my-2 p-2 rounded ${
                            msg.sender === "user"
                                ? "bg-blue-500 text-white text-right"
                                : "bg-green-500 text-white text-left"
                        }`}
                    >
                        {msg.text}
                        {msg.files && (
                            <div className="mt-2">
                                {msg.files.map((file, i) => (
                                    <div key={i} className="text-sm text-gray-200">
                                        {file}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="flex mt-4">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Type your message..."
                    className="flex-grow p-2 border border-gray-300 rounded-l"
                /><input
                    type="file"
                    id="file-input"
                    style={{ display: 'none' }}
                    onChange={handleAttachFiles}
                    multiple
                />
                <input
                    type="file"
                    id="file-input"
                    style={{ display: 'none' }}
                    onChange={handleAttachFiles}
                    multiple
                />
                <button
                    onClick={handleSend}
                    onMouseDown={() => setIsSendPressed(true)}
                    onMouseUp={() => setIsSendPressed(false)}
                    onMouseLeave={() => setIsSendPressed(false)}
                    style={commonButtonStyle(isSendPressed)}
                >
                    <img src={btnSend} alt="Send icon" style={{ width: '20px', height: '20px'}} />
                </button>
                <button
                    onClick={() => document.getElementById('file-input').click()}
                    onMouseDown={() => setIsAttachPressed(true)}
                    onMouseUp={() => setIsAttachPressed(false)}
                    onMouseLeave={() => setIsAttachPressed(false)}
                    style={commonButtonStyle(isAttachPressed)}
                >
                    <img src={btnAttach} alt="Attach icon" style={{ width: '20px', height: '20px' }} />
                </button>
            </div>
            <div className="mt-2">
                {attachedFiles.length > 0 && (
                    <div className="bg-gray-100 p-2 rounded">
                        <h4>Attached Files:</h4>
                        {attachedFiles.map((file, index) => (
                            <div key={index} className="text-sm text-gray-700">
                                {file.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Chat;
