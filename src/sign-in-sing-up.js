import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function SignInSignUp() {
   
  return (
    <div className="login-signup">
      <Link
        to="/SignupPage"
        className="log-in"
        style={{ textDecoration: "none" }}
      >
          <div>Login</div>
          <BsPersonCircle />

      </Link>
      <Link
        to="/SignupPage"
        className="sign-up"
        style={{ textDecoration: "none" }}
      >
        <div>Join Free</div>
      </Link>
    </div>
  );
}
