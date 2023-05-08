import { useNavigate } from "react-router-dom";
import "src/app/components/Header/index.scss";
import logo from "src/app/assets/icons/logo-blue.svg";
import HeaderAvatar from "src/app/components/HeaderAvatar";
import ChangePostsBtns from "src/app/components/ChangePostsBtns";

function Header({ userName }: { userName: string }) {
  const navigate = useNavigate();
  return (
    <header className="center">
      <img src={logo} alt="logo" className="app-logo" />
      <div className="header-change-posts">
        <ChangePostsBtns />
      </div>
      {userName ? (
        <HeaderAvatar userName={userName} />
      ) : (
        <div>
          <button
            className="nav-button outlined"
            onClick={() => navigate("/login")}
          >
            Log in
          </button>
          <button
            className="nav-button contained"
            onClick={() => navigate("/register")}
          >
            Sign up
          </button>
        </div>
      )}
    </header>
  );
}
export default Header;
