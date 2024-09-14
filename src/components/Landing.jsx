import { SignInButton, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Landing.css";
// Nirbhay singh
// Author Nirbhay Singh
const Landing = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  // Redirect to /home if the user is signed in
  useEffect(() => {
    if (isSignedIn) {
      navigate("/home");
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="desktop-container">
      <div className="content">
        <div className="icon">
          <i className="chat-icon">💬</i>
        </div>
        <h1>
          Fruit.<span className="highlight">Ai</span>
        </h1>
        <p className="para">
          A personalized AI assistant that helps users with common tasks like
          fruit-related FAQs, language translation, and engaging chatbot
          interactions.
        </p>
        <div className="button-group">
          {!isSignedIn && (
            // Use Clerk's SignInButton to open the login modal
            <SignInButton mode="modal">
              <button className="start-button">Get Started</button>
            </SignInButton>
          )}
        </div>
      </div>

      {/* Features Section */}
      {/* <section className="features-section">
        <h2 className="features-heading">Our Amazing Features</h2>
        <div className="features-container">
          <div className="feature-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s"
              alt="Feature 1"
              className="feature-image"
            />
            <div className="feature-text">
              <h3>Feature 1</h3>
              <p>
                Description of Feature 1. Highlight how it benefits users and
                improves their experience.
              </p>
            </div>
          </div>
         
          <div className="feature-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s"
              alt="Feature 3"
              className="feature-image"
            />
            <div className="feature-text">
              <h3>Feature 2</h3>
              <p>
                Description of Feature 3. Provide details on how this feature
                stands out.
              </p>
            </div>
          </div>
          <div className="feature-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s"
              alt="Feature 3"
              className="feature-image"
            />
            <div className="feature-text">
              <h3>Feature 3</h3>
              <p>
                Description of Feature 3. Provide details on how this feature
                stands out.
              </p>
            </div>
          </div>
          <div className="feature-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s"
              alt="Feature 3"
              className="feature-image"
            />
            <div className="feature-text">
              <h3>Feature 4</h3>
              <p>
                Description of Feature 3. Provide details on how this feature
                stands out.
              </p>
            </div>
          </div>
          
        </div>
      </section> */}
    </div>
  );
};

export default Landing;
