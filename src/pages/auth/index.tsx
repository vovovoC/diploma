import logo from "../../app/assets/icons/logo-green.svg";
import img1 from "../../app/assets/images/registration2.svg";
import img2 from "../../app/assets/images/registration1.svg";
import "./index.scss";

import { CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";
import {
  LoginContent,
  RegisterContent,
  ResetPasswordContent,
} from "../../features/auth";
import { Notification } from "../../app/components/Notification";

type ntfType = { id: string; type: string; title: string; msg: string };

export const AuthPage = ({ type }: { type: string }) => {
  const [showFront, setShowFront] = useState<any>({
    login: true,
    register: true,
    reset: false,
  });
  const [ntfList, setNtfList] = useState<ntfType[]>([]);

  useEffect(() => {
    setShowFront({
      login: type === "login",
      register: type === "register",
      reset: type === "resetPsw",
    });
  }, [type]);

  function showNtf(arr: any) {
    setNtfList(arr);
  }
  return (
    <div className="register">
      <img src={logo} alt="" className="logo" />
      <div className="background-img">
        <img src={img1} alt="" className="img1" />
        <img src={img2} alt="" className="img2" />
      </div>
      <Notification list={ntfList} showNtf={showNtf} />
      <div className="flippable-card-container">
        <CSSTransition in={showFront.login} timeout={500} classNames="flip">
          <div className="card">
            <div
              className={showFront.register ? "card-back" : "card-back notshow"}
            >
              <RegisterContent ntfList={ntfList} showNtf={showNtf} />
            </div>
            <div
              className={showFront.login ? "card-front" : "card-front  notshow"}
            >
              <LoginContent ntfList={ntfList} showNtf={showNtf} />
            </div>
            <div
              className={showFront.reset ? "card-back" : "card-back notshow"}
            >
              <ResetPasswordContent ntfList={ntfList} showNtf={showNtf} />
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};
