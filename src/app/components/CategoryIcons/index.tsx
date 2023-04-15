import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import CropIcon from "@mui/icons-material/Crop";
import WifiIcon from "@mui/icons-material/Wifi";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import SecurityIcon from "@mui/icons-material/Security";
import ElevatorIcon from "@mui/icons-material/Elevator";
import CommentIcon from "@mui/icons-material/Comment";
import "./index.scss";

interface Props {
  i: string;
  text: any;
}
const category = {
  floor: {
    name: "Floor",
    icon: <MenuIcon sx={{ color: " #808494", mr: "5px" }} />,
  },
  area: {
    name: "MenuIcon",
    icon: <CropIcon sx={{ color: " #808494", mr: "5px" }} />,
  },
  wifi: {
    name: "Wi-Fi",
    icon: <WifiIcon sx={{ color: " #808494", mr: "5px" }} />,
  },
  layout: {
    name: "Layout",
    icon: <ListAltIcon sx={{ color: " #808494", mr: "5px" }} />,
  },
  home: {
    name: "Entire Place",
    icon: <HomeIcon sx={{ color: " #808494", mr: "5px" }} />,
  },
  security: {
    name: "Security",
    icon: <SecurityIcon sx={{ color: " #808494", mr: "5px" }} />,
  },
  elevator: {
    name: "Elevator",
    icon: <ElevatorIcon sx={{ color: " #808494", mr: "5px" }} />,
  },
};

function CategoryIcon({ i, text }: Props) {
  return (
    <div className="post-category">
        <p>{category[i as keyof typeof category].name}</p>
        <div>
          {category[i as keyof typeof category].icon}
          <p>{text}</p>
        </div>
    </div>
  );
}
export default CategoryIcon;
