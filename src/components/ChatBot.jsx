import { useState } from "react";
import "../Styles/ChatBot.css";

const fruits = [
  { id: 1, name: "Apple", description: "Rich in fiber and vitamin C." },
  {
    id: 2,
    name: "Banana",
    description: "High in potassium and easy to digest.",
  },
  { id: 3, name: "Orange", description: "A great source of vitamin C." },
  // Add more fruits
];

const Chatbot = () => {
  const [selectedFruit, setSelectedFruit] = useState(null);

  return (
    <div className="chat-container">
      <header className="chat-header">
        <h1>Fruit Chatbot</h1>
      </header>
      <div className="chat-body">
        {selectedFruit ? (
          <div className="fruit-detail-card">
            <h2>{selectedFruit.name}</h2>
            <p>{selectedFruit.description}</p>
            <button onClick={() => setSelectedFruit(null)}>Back to List</button>
          </div>
        ) : (
          <div className="fruit-list">
            {fruits.map((fruit) => (
              <div
                key={fruit.id}
                className="fruit-card"
                onClick={() => setSelectedFruit(fruit)}
              >
                <h3>{fruit.name}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
