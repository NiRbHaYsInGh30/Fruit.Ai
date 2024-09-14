// Nirbhay singh
// Author Nirbhay Singh
import { useNavigate } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        {navigate("/home")}
        <UserButton>Show</UserButton>
      </SignedIn>
    </div>
  );
};

export default Login;
