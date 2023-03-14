import logo from "../../assets/icons/logo-green.svg";
import img1 from "../../assets/images/registration2.svg";
import img2 from "../../assets/images/registration1.svg";
import "./index.scss";

import {CSSTransition} from 'react-transition-group';
import {useState} from 'react';
import SignIn from "../signin";
import SignUp from "../signup";

export const Register = () => {
  const [showFront, setShowFront] = useState(true);
  const changePage = () => {
    setShowFront((v) => !v);
  }
  return (
  <div className="register">
      <img src={logo} alt="" className="logo"/>
      <div className="background-img">
        <img src={img1} alt="" className="img1"/>
        <img src={img2} alt="" className="img2"/>
      </div>
      <div className="flippable-card-container">
          <CSSTransition
                  in={showFront}
                  timeout={500}
                  classNames='flip'
              >
                <div className="card">
                  <div className="card-back">
                    <SignUp fn={changePage}/>
                  </div>
                  <div className="card-front">
                    <SignIn fn={changePage}/>
                  </div>
                </div>
            
          </CSSTransition>
        </div>
      </div>
  )
};

