import { useState } from "react";
import axios from "axios";
import "../Styles/ChatBot.css"

const Chat = () => {
  const [messages, setMessages] = useState([]); // Stores chat history
  const [input, setInput] = useState(""); // Stores user input
  const [loading, setLoading] = useState(false); // Manages loading state

  // Handles input change in the text field
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Handles message sending logic
  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage = { role: "user", content: input }; // Structure for user message
      setMessages([...messages, userMessage]); // Update state with user message

      // Clear the input field
      setInput("");
      setLoading(true); // Start loading spinner

      // Call your API here (keeping your API logic intact)
      try {
        const response = await axios({
          url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAVanAyDyrjpdoU7wOpQxXIXCH4Yg9N3-s",
          method: "post",
          data: { contents: [{ parts: [{ text: input }] }] },
        });

        const botResponse = response.data.candidates[0].content.parts[0].text;
        const botMessage = { role: "bot", content: botResponse }; // Structure for bot message
        setMessages([...messages, userMessage, botMessage]); // Add bot message to chat
      } catch (error) {
        console.error("Error fetching bot response:", error);
      }

      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <div className="chat-container-wrapper">
      <div className="chatbot-container">
        <div className="chat-header">
          <h2>Chat</h2>
        </div>

        {/* Chat body to display chat messages */}
        <div className="chat-body">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={msg.role === "user" ? "user-message" : "bot-message"}
            >
              {msg.content}
            </div>
          ))}
          {loading && <div className="loading">Bot is typing...</div>}
        </div>

        {/* Chat footer to take input from user */}
        <div className="chat-footer">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
