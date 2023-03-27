import * as React from "react";
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./index.scss";


function BackButton() {
  const navigate = useNavigate();
  return (
    <button className="back-btn" onClick={() => navigate("/")}>
      <ChevronLeftIcon sx={{ color: "#0032E4" }} /> Back to search
    </button>
  );
}
export default BackButton;
