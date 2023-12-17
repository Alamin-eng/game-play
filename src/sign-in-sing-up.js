import { BsPersonCircle } from "react-icons/bs";
import { BsPersonPlusFill } from "react-icons/bs";

export default function SignInSignUp() {
  return (
    <div className="login-signup">
      <div className="log-in">
        <div>Log In</div>
        <BsPersonCircle />
      </div>
      <div className="sign-up">
        <div>Join Free</div>
        <BsPersonPlusFill />
      </div>
    </div>
  );
}
