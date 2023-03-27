import React, { useState } from "react";
import { createTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "../../app/components/Layout";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LinkIcon from '@mui/icons-material/Link';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ImageIcon from '@mui/icons-material/Image';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import CropIcon from '@mui/icons-material/Crop';
import WifiIcon from '@mui/icons-material/Wifi';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MapIcon from '@mui/icons-material/Map';
import CommentIcon from '@mui/icons-material/Comment';

import "./index.scss";

import room1 from "../../app/assets/images/room1.jpg"
import room2 from "../../app/assets/images/room2.jpg"
import room3 from "../../app/assets/images/room3.jpg"
import profile from "../../app/assets/images/profile.jpg"



export function Post() {
  const theme = createTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    useCSS: true,
    variableWidth: false,
    swipeToSlide: true,
    edgeFriction: 0.15,
  };
  const category = {
    floor: {
      name : "Floor",
      icon: <MenuIcon sx={{color: " #808494", mr: "5px"}}/>
    },
    area: {
      name: "MenuIcon",
      icon: <CropIcon sx={{color: " #808494", mr: "5px"}}/>
    },
    wifi: {
      name: "Wi-Fi",
      icon: <WifiIcon sx={{color: " #808494", mr: "5px"}}/>
    },
    layout: {
      name: "Layout",
      icon: <ListAltIcon sx={{color: " #808494", mr: "5px"}}/>
    }
  }
  return (
    <Layout theme={theme}>
      <div className="postDetailPage">
        <div className="postInfo">
          <div className="wrapper">
            <button className="back-btn" onClick={() => navigate("/")}>
              <ChevronLeftIcon sx={{color: "#0032E4"}}/> Back to search
            </button>
            <p className="post-title">
              4 rooms, 230 m², Karmysova 82/2
            </p>
            <div className="post-header">
              <p className="post-location">
                Almaty, Medeu district
              </p>
              <div className="post-btns">
                <button><LinkIcon sx={{color: "#5D89FA", mr: "5px"}}/>Share</button>
                <button><FavoriteBorderIcon sx={{color: "#5D89FA", mr: "5px"}}/>Favourite</button>
              </div>
            </div>
            <div className="post-imgs">
              <div onClick={() => { setOpen(true);}} className="item1"><img src={room1} alt="" /></div>
              <div onClick={() => { setOpen(true);}}><img src={room2} alt="" /></div>
              <div onClick={() => { setOpen(true);}}><img src={room3} alt="" /></div>
              <button onClick={() => { setOpen(true);}} className="img-btn"><ImageIcon sx={{color:"#5D89FA",mr:"5px"}}/>View all photos</button>
            </div>
            <div className={open ? "img-carusel" : "hide"}>
                  <CloseIcon onClick={() => { setOpen(false);}}  sx={{color: "white", position: "fixed", top: "5%", right: "5%", cursor: "pointer"}}/>
                  <Slider {...settings} className="slider">
                    {[room1, room2, room3].map((image, i) => (
                          <img key={i}
                              id={image}
                              src={image}
                              alt="image" className="slider-img" />
                    ))}
                  </Slider>
            </div>
            <div className="post-body">
                <div className="post-text">
                  <div className="slider__container">
                    <div className="post-categorys">
                        <div className="post-category">
                          <p>{category.floor.name}</p>
                          <div>{category.floor.icon}
                                <p>3</p>
                          </div>
                        </div>
                        <div className="post-category">
                          <p>{category.area.name}</p>
                          <div>{category.area.icon}
                                <p>5*7 m</p>
                          </div>
                        </div>
                        <div className="post-category">
                          <p>{category.wifi.name}</p>
                          <div>{category.wifi.icon}
                                <p>yes</p>
                          </div>
                        </div>
                        <div className="post-category">
                          <p>{category.layout.name}</p>
                          <div>{category.layout.icon}
                                <ul>
                                  <li>2 bedroom</li>
                                  <li>1 bath</li>
                                </ul>
                          </div>
                        </div>
                        <div className="post-category">
                          <p>{category.layout.name}</p>
                          <div>{category.layout.icon}
                                <ul>
                                  <li>2 bedroom</li>
                                  <li>1 bath</li>
                                </ul>
                          </div>
                        </div>
                        <div className="post-category">
                          <p>{category.layout.name}</p>
                          <div>{category.layout.icon}
                                <ul>
                                  <li>2 bedroom</li>
                                  <li>1 bath</li>
                                </ul>
                          </div>
                        </div>
                        <div className="post-category">
                          <p>{category.layout.name}</p>
                          <div>{category.layout.icon}
                                <ul>
                                  <li>2 bedroom</li>
                                  <li>1 bath</li>
                                </ul>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="post-about">
                      <p className="post-body-title">About</p>
                      <p className="post-about-text">
                        Clean, cozy, refrigerator, washing machine, cable TV, + rent, for the long term, TV, all appliances. Hostel with an ideal location for tourists, direct flights to Medeo, Shymbulak, walking distance to the cable car to Koktyube, Republic Square, in front of the hostel the Terrenekur River with cycling track, park area, also hotels Kazakhstan, Dostyk Ave. and Abay
                      </p>
                  </div>
                  <hr />
                  <div>
                      <p className="post-body-title">Map</p>
                      <div className="post-map">
                          <MapIcon/>
                      </div>
                  </div>
                </div>
                <div className="post-card">
                    <div>
                      <p className="post-card-title">Rent price</p>
                      <p className="post-card-price">55,000tg<span>/month</span></p>
                    </div>
                    <hr />
                    <div  className="post-card-body">
                        <div className="post-card-author">
                          <p className="post-card-title">Author</p>
                          <div className="post-author">
                            <img src={profile} alt="" />
                            <div className="post-author-info">
                              <p className="post-author-name">Madina Alzhan</p>
                              <p className="post-author-job">Landlord/comp/specialist</p>
                              <p className="post-author-phone">+7 707 855 2200</p>
                            </div>
                          </div>
                        </div>
                        <div className="post-card-btns">
                            <button className="post-author-chat"><CommentIcon sx={{color:"white",mr:"2px"}}/>Start a chat</button>
                            <button className="post-author-more"><CommentIcon sx={{color:"#5681FB",mr:"2px"}}/>Get more info about author</button>
                        </div>
                       
                    </div>
  
                </div>
            </div>
          </div>
          
        </div>
        <div className="similarListing wrapper">
          <p className="similarListing-title">Similar listing</p>
          <div className="similarListing-container">

          </div>
          
        </div>
      </div>
      
    </Layout>
  );
}
