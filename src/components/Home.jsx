// Nirbhay singh
// Author Nirbhay Singh
import "../Styles/Home.css";
const Home = () => {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Fruit.Ai</h1>
        <strong>
          <p>Be Healthy</p>
        </strong>
      </header>
      <div className="grid-container">
        <a href="/chat">
          <div className="grid-item chat">
            <h3>Chat</h3>
          </div>
        </a>

        <a
          href="/translate"
          
        >
          <div className="grid-item translate">
            <h3>Google Translate</h3>
          </div>
        </a>

        <a href="/faqs">
          <div className="grid-item faqs">
            <h3>FAQs</h3>
          </div>
        </a>

        <a href="/about">
          <div className="grid-item about">
            <h3>About</h3>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Home;
