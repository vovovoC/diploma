import logo from "../../app/assets/icons/logo-green.svg";
import img1 from "../../app/assets/images/registration2.svg";
import img2 from "../../app/assets/images/registration1.svg";
import "./index.scss";

import { CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";
import { LoginContent, RegisterContent } from "../../features/auth";

export const AuthPage = ({ type }: { type: string }) => {
  const [showFront, setShowFront] = useState<boolean>(true);

  useEffect(() => {
    setShowFront(type === "login");
  }, [type]);

  return (
    <div className="register">
      <img src={logo} alt="" className="logo" />
      <div className="background-img">
        <img src={img1} alt="" className="img1" />
        <img src={img2} alt="" className="img2" />
      </div>
      <div className="flippable-card-container">
        <CSSTransition in={showFront} timeout={500} classNames="flip">
          <div className="card">
            <div className="card-back">
              <RegisterContent />
            </div>
            <div className="card-front">
              <LoginContent />
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};
