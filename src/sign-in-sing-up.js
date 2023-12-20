import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function SignInSignUp() {
   
  return (
    <div className="login-signup">
      <div className="log-in">
        <div>Login</div>
        <BsPersonCircle />
      </div>
      <Link to="/SignupPage" className="sign-up" style={{textDecoration:"none"}}>
        <div>Join Free</div>
      </Link>
    </div>
  );
}
