import "./index.scss";
import logo from "../../../src/app/assets/icons/logo-grey.svg";
import icon1 from "../../../src/app/assets/icons/iconSignIn.svg";
import icon2 from "../../../src/app/assets/icons/iconMark.svg";
import icon3 from "../../../src/app/assets/icons/iconHandshake.svg";
import img1 from "../../../src/app/assets/images/img1.png";
import img2 from "../../../src/app/assets/images/img2.png";
import img3 from "../../../src/app/assets/images/img3.png";
import lineImg from "../../../src/app/assets/images/mainLine.svg";
import CallIcon from '@mui/icons-material/Call';
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
    const navigate = useNavigate();
    return (
      <div className="main-page">
        <div className="main-aboutus">
            <div className="main-back-img"></div>
            <div className="wrapper">
                <header className="main-header">
                    <img src={logo} alt="logo"/>
                    <nav className="main-page-menu flex">
                        <ul className="main-page-link flex">
                            <li><a href="/posts">Home</a></li>
                            <li><a href="#aboutUs">About Us</a></li>
                            <li><a href="#contactUs">Contact Us</a></li>
                        </ul>
                        <button className="main-log-in" onClick={() => navigate("/login")}>Log in</button>
                        <button className="main-sign-up" onClick={() => navigate("/register")}>Sign up</button>
                    </nav>
                </header>
                <div className="main-header-text">
                    <h3>Qonys helping you find a roommate</h3>
                    <p>We are glad to have you around. Let’s find a room or roommates that suits you.</p>
                </div>
                <div className="main-header-search">
                    <h4>Rooms for rent</h4>
                    <p>Find and rent your perfect room</p>
                    <button onClick={() => navigate("/posts")}>Search</button>
                </div>
            </div>
        </div>
        <div className="back-line-img">
            <img src={lineImg}/>
        </div>
        <div className="how-works" id="aboutUs">
            <p className="how-works-title">How it works</p>
            <p className="how-works-text">This is how our products works</p>
            <div className="box-slider">
                <div className="how-works-box">
                    <div>
                        <img src={icon1} alt="" />
                        <p className="box-title">Sign up</p>
                        <p className="box-text">Our estates comes with good network,portable water , 24hrs light and round the clock security.</p>
                    </div>
                    <div>
                        <img id="" src={icon2} alt="" />
                        <p className="box-title">Find Home or Roommate</p>
                        <p className="box-text">Our properties are located at prime areas where by there won’t be problem with transportation </p>
                    </div>
                    <div>
                        <img src={icon3} alt="" />
                        <p className="box-title">Make a Deal</p>
                        <p className="box-text">Make an agreement with your roommate, find new people and a nice apartment</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-page-lists">
            <p>Similar listings</p>
            <div className="main-page-imgs" onClick={() => navigate("/posts")}>
                <img src={img1}/>
                <img src={img2}/>
                <img src={img3}/>
            </div>
        </div>
        <div id="contactUs" className="main-footer">
            <p>© Qonys, 2023</p>
            <p id="contactus"><CallIcon sx={{fontSize: "12px"}}/> +7 778 456 3870</p>
        </div>
      </div>
    );
  };