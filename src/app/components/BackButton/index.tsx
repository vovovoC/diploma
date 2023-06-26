import * as React from "react";
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./index.scss";

interface Props {
  name: string;
}

function BackButton({ name }: Props) {
  const navigate = useNavigate();
  return (
    <button className="back-btn" onClick={() => navigate("/posts")}>
      <ChevronLeftIcon sx={{ color: "#0032E4",ml: "-5px"}} /> Back to {name}
    </button>
  );
}
export default BackButton;
