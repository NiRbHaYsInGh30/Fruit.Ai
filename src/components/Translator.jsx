import { useState } from "react";
import axios from "axios";
import "../Styles/Translator.css";

const Translator = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("es"); // Default to Spanish ('es')

  // Function to handle translation
  const translateText = async () => {
    const apiKey = "AIzaSyBrBqBEN9lp3PZJckRbsBEE4YpJMEzb3Ic";
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    try {
      const response = await axios.post(
        url,
        {
          q: inputText, // The text to translate
          source: "en", // Source language (English by default)
          target: targetLanguage, // Target language (selected by the user)
          format: "text", // Format of the input text
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Set the translated text from the API response
      setTranslatedText(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error("Translation Error:", error);
      setTranslatedText("Error in translation.");
    }
  };

  return (
    <div className="translator-container">
      <div className="phone-frame">
        <h1>Fruit Translator</h1>

        <input
          type="text"
          placeholder="Enter text to translate"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="translator-input"
        />

        <select
          className="language-select"
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
        >
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="hi">Hindi</option>
          <option value="zh">Chinese</option>
          <option value="ar">Arabic</option>
          {/* Add more languages as needed */}
        </select>

        <button onClick={translateText} className="translate-button">
          Translate
        </button>

        {translatedText && (
          <div className="translation-result">
            <p>Translation: {translatedText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Translator;
