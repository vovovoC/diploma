import logo from "src/app/assets/icons/logo-green.svg";
import img1 from "src/app/assets/images/registration2.svg";
import img2 from "src/app/assets/images/registration1.svg";
import img3 from "src/app/assets/images/registration3.svg";
import "./index.scss";

import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  LoginContent,
  RegisterContent,
  ResetPasswordContent,
} from "src/features/auth";

export const AuthPage = ({ type }: { type: string }) => {
  const navigate = useNavigate();
  const [showFront, setShowFront] = useState<any>({
    login: true,
    register: true,
    reset: false,
  });

  useEffect(() => {
    setShowFront({
      login: type === "login",
      register: type === "register",
      reset: type === "resetPsw",
    });
  }, [type]);

  return (
    <div className="register">
      <img src={logo} alt="" className="logo" onClick={() => navigate("/")} style={{cursor: "pointer"}}/>
      <div className="background-img">
        <img src={img1} alt="" className="img1" />
        <img src={img2} alt="" className="img2" />
      </div>
      <div className="bachground-img-mpobile">
        <img src={img3} alt="" className="img3" />
      </div>
      <div className="flippable-card-container">
        <CSSTransition in={showFront.login} timeout={500} classNames="flip">
          <div className="card">
            <div
              className={showFront.register ? "card-back" : "card-back notshow"}
            >
              <RegisterContent />
            </div>
            <div
              className={showFront.login ? "card-front" : "card-front  notshow"}
            >
              <LoginContent />
            </div>
            <div
              className={showFront.reset ? "card-back" : "card-back notshow"}
            >
              <ResetPasswordContent />
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};
