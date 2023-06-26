import * as React from "react";
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import instagram from "../../../app/assets/icons/instagram.svg";
import "./index.scss";



function SocialMedia() {
  const navigate = useNavigate();
  const t_url = "https://t.me/it_community_sdu";
  const i_url = "https://www.instagram.com/sdukz/";
  const w_url = "https //wa.me/87773565549";
  return (
    <div className="media-container">
      {/* <InstagramEmbed url={i_url} width={328} /> */}
      {/* <button className="cnf-card-close" title="Close" onClick={() => fn()}><CloseIcon sx={{color: "white"}}/></button> */}
      <TelegramShareButton url={t_url} style={{ width: "auto"}}>
        <TelegramIcon size={32} round  />
      </TelegramShareButton>
      <WhatsappShareButton url={w_url} style={{ width: "auto"}}>
        <WhatsappIcon size={32} round/>
      </WhatsappShareButton>
      <div className="insta_div"><a href={i_url} target="_blank"><img src={instagram} alt="" /></a></div>
    </div>
  );
}
export default SocialMedia;
