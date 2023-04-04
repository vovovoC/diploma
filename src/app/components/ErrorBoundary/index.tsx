import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/icons/logo-green.svg";
import errorImg from "../../assets/images/404.png";
import "./index.scss";

const useStyles = makeStyles({
  error: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
});

interface Props {
  error: any;
}
const errorText = {
  404: 'Woops. Looks like this page doesn’t exist.',
  500: 'Woops. Looks like this page doesn’t work.'
}

export function ErrorBoundary({ error }: Props) {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <img src={logo} alt="" className="logo show" />
      <div className="body">
        <div className="error-img">
          <img src={errorImg} alt=""/>
          <p>{error}</p>
        </div>
        <div className="error-text">
           <p className="error-msg">{errorText[error as keyof typeof errorText]}</p>
           <p className="back-link">back to <button  onClick={() => navigate("/")}>home</button></p>
        </div>
      </div>
    </div>
  );
}
