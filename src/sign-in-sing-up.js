import { BsPersonCircle, BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function SignInSignUp() {
   
  return (
    <div className="login-signup">
      <Link
        to="/SignupPage"
        className="log-in"
        style={{ textDecoration: "none" }}
      >
          <div>LOGIN</div>
          <BsPersonCircle color="violet"/>

      </Link>
      <Link
        to="/SignupPage"
        className="sign-up"
        style={{ textDecoration: "none" }}
      >
        <div>JOIN</div>
        <BsPlusCircle color="violet"/>
      </Link>
    </div>
  );
}
