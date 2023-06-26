import "./index.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import user from "src/app/assets/images/user1.png";
import CommentIcon from "@mui/icons-material/Comment";
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { addFavRoomPostList } from "src/entities/fav-posts/model/fav-post";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import copy from 'copy-to-clipboard';
import LinkIcon from "@mui/icons-material/Link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Backdrop from "@mui/material/Backdrop";
import SocialMedia from "src/app/components/SocialMediaShare";
import TelegramIcon from "@mui/icons-material/Telegram";
import {Rating} from 'src/app/components/Rating'

interface Props {
  data: Record<any, any>;
  fn: () => void;
  rate: number;
  setRate:(val: number) => void;
}

export const UserAnketa = ({data, fn, setRate, rate}: Props) => {
  const [openChat, setOpenChat] = useState(false);
  const [images, setImages] = useState([])
  const dispatch = useDispatch();
  const handleToggleChat = () => {
    setOpenChat(!openChat);
  };
  useEffect(()=>{
    setImages(data?.image)
  },[data])
 
 
  return (
    <div className="user-anketa roommate-detail">
      <div className="user-anketa-right roommate-post-right">
        <div className="right-anketa-header">
          <div className="anketa-header-title roomate-anketa-header-title">
            Hi, I’m {data?.fullname}
          </div>
          <div className="anketa-header-age">
            {data?.age} years <div>.</div> {data?.gender}
          </div>
        </div>
        <div className="anketa-body user-anketa-body">
          <table>
            <tbody>
              <tr>
                <th>About</th>
                <td>{data?.description}</td>
              </tr>
              <tr>
                <th>Work</th>
                <td>{data?.work}</td>
              </tr>
            </tbody>
          </table>
          <p className="title-looking">
            <b>I'm looking for a room</b>
          </p>
          <table>
            <tbody>
              <tr>
                <th>Work</th>
                <td>{data.work}</td>
              </tr>
              <tr>
                <th>University</th>
                <td>{data.study}</td>
              </tr>
              <tr>
                <th>About me</th>
                <td>{data.description}</td>
              </tr>
              <tr>
                <th>Phone number</th>
                <td>{data.phonenumber}</td>
              </tr>
              <tr>
                <th>Social acc</th>
                <td className="anketa-socialmedia">
                  <ul>
                    {/* <li>
                      <InstagramIcon sx={{ mr: "2px" }} /> {data.links_to_media}
                    </li> */}
                    <li>
                      <TelegramIcon sx={{ mr: "2px" }} /> {data.links_to_media}
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Lifestyle</th>
                <td className="anketa-lifestyle">
                <ul>
                  {
                    data?.tags?.split(',').map((i: string)=> (<li key={i}>{i}</li>))
                  }
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="user-anketa-left">
        <button className="post-close" title="Close" onClick={() => fn()}>
          <CloseIcon sx={{ backgroundColor: "transparent" }} />
        </button>
        <div className="user-anketa-left-card">
         <div style={{minHeight:'200px', display: 'flex', justifyContent: 'center'}}>
         {
           Array.isArray(data?.image) 
           ?  images?.map((i: string) => <img src={`http://159.223.21.6/images/${i}`} alt="Author" key={i}/> )
           :  data?.image !== 'Not specified' ? <img src={`http://159.223.21.6/images/${data?.image}`} alt="Author" />
           : <PersonIcon sx={{height:'200px', width:'200px'}}/>
          }
         </div>
         <div className="rating">
         <Rating onChange={setRate} max={5} initialValue={rate}/> 
         <span>31</span>
         </div>
          <div className="roommate-post-action">
            <button className="post-author-chat" onClick={handleToggleChat}>
              <CommentIcon sx={{ color: "white", mr: "2px", width: "18px" }} />
              Start a chat
            </button>
            <Backdrop
              sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={openChat}
              onClick={handleToggleChat}
            >
              <SocialMedia/>
            </Backdrop>
            <div className="flex post-btns">
              <button onClick={()=> {
                copy(window.location.href)
              }}>
                <LinkIcon sx={{ color: "#5D89FA", mr: "5px" }} />
                Share
              </button>
              <button onClick={(e) => {
                  e.stopPropagation();
                  console.log(data?.id)
                  dispatch(
                    addFavRoomPostList({ post_id: Number(data?.id) }) as any
                  );
                }}>
                <FavoriteBorderIcon sx={{ color: "#5D89FA", mr: "5px" }} />
                Favourite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
