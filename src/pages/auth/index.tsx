import logo from "../../app/assets/icons/logo-green.svg";
import img1 from "../../app/assets/images/registration2.svg";
import img2 from "../../app/assets/images/registration1.svg";
import "./index.scss";

import { CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";
import { LoginContent, RegisterContent } from "../../features/auth";
import { Notification } from "../../app/components/Notification";

type ntfType = { id: string, type: string, title: string, msg: string };

export const AuthPage = ({ type }: { type: string }) => {
  const [showFront, setShowFront] = useState<boolean>(true);
  const [ntfList, setNtfList] = useState<ntfType[]>([]);

  useEffect(() => {
    setShowFront(type === "login");
  }, [type]);

  function showNtf(arr:any){
    setNtfList(arr);
  }
  return (
    <div className="register">
      <img src={logo} alt="" className="logo" />
      <div className="background-img">
        <img src={img1} alt="" className="img1" />
        <img src={img2} alt="" className="img2" />
      </div>
      <Notification list={ntfList} showNtf={showNtf}/>

      <div className="flippable-card-container">
        <CSSTransition in={showFront} timeout={500} classNames="flip">
          <div className="card">
            <div className={showFront ? "card-back  notshow": "card-back"} >
              <RegisterContent />
            </div>
            <div className={showFront ? "card-front": "card-front  notshow"}>
              <LoginContent ntfList={ntfList} showNtf={showNtf}/>
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};
