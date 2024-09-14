import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import "../Styles/Navbar.css";

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <nav className="navbar">
      <a href="/" className="logo-link">
        <div className="logo">FruitAI</div>
      </a>
      <div className="nav-links">
        {isSignedIn ? (
          // Show the UserButton which handles user settings, logout, etc.
          <UserButton />
        ) : (
          <>
            <SignInButton mode="modal">
              <button className="login-btn">Login</button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="signup-btn">Sign Up</button>
            </SignUpButton>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
