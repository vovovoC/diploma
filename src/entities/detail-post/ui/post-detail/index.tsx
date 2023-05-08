import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LinkIcon from "@mui/icons-material/Link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import ImageIcon from "@mui/icons-material/Image";
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
import profile from "../../../../app/assets/images/profile.jpg";
import { SetStateAction, Dispatch } from "react";
import BackButton from "../../../../app/components/BackButton";
import { PostDetailData } from "../../../../shared/types";
import { MapContent } from "../../../../app/components/Map";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  data: PostDetailData;
}

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

export const PostDetail = ({ open, setOpen, data }: Props) => {
  const { location, address, bedroom, square, description, price, image } =
    data;

  const getImage = (item: string) => {
    return `http://159.223.21.6/images/${item}`;
  };

  const defaultImage =
    "https://img.ksl.com/mx/mplace-rent.ksl.com/no-image-default.png?width=940&height=529&operation=fit";

  return (
    <div className="postDetailPage">
      <div className="postInfo">
        <div className="wrapper">
          <BackButton name={"search"} />
          <p className="post-title">
            {bedroom} rooms, {square} m², {address}
          </p>
          <div className="post-header">
            <p className="post-location">{location}</p>
            <div className="post-btns">
              <button>
                <LinkIcon sx={{ color: "#5D89FA", mr: "5px" }} />
                Share
              </button>
              <button>
                <FavoriteBorderIcon sx={{ color: "#5D89FA", mr: "5px" }} />
                Favourite
              </button>
            </div>
          </div>
          <div className="post-imgs">
            <div
              onClick={() => {
                setOpen(true);
              }}
              className="item1"
            >
              <img
                src={image?.length > 0 ? getImage(image[0]) : defaultImage}
                alt="Qonys room"
              />
            </div>
            <div
              onClick={() => {
                setOpen(true);
              }}
            >
              <img
                src={image?.length > 1 ? getImage(image[1]) : defaultImage}
                alt="Qonys room"
              />
            </div>
            <div
              onClick={() => {
                setOpen(true);
              }}
            >
              <img
                src={image?.length > 2 ? getImage(image[2]) : defaultImage}
                alt="Qonys room"
              />
            </div>
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="img-btn"
            >
              <ImageIcon sx={{ color: "#5D89FA", mr: "5px" }} />
              View all photos
            </button>
          </div>
          <div className={open ? "img-carusel" : "hide"}>
            <CloseIcon
              onClick={() => {
                setOpen(false);
              }}
              sx={{
                color: "white",
                position: "fixed",
                top: "5%",
                right: "5%",
                cursor: "pointer",
              }}
            />
            <Slider {...settings} className="slider">
              {image?.map((item: any, i: number) => (
                <img
                  key={i}
                  id={item}
                  src={`http://159.223.21.6/images/${item}`}
                  alt="Room"
                  className="slider-img"
                />
              ))}
            </Slider>
          </div>
          <div className="post-body">
            <div className="post-text">
              <div className="slider__container">
                <div className="post-categorys">
                  <div className="post-category">
                    <p>{category.floor.name}</p>
                    <div>
                      {category.floor.icon}
                      <p>3</p>
                    </div>
                  </div>
                  <div className="post-category">
                    <p>{category.area.name}</p>
                    <div>
                      {category.area.icon}
                      <p>5*7 m</p>
                    </div>
                  </div>
                  <div className="post-category">
                    <p>{category.layout.name}</p>
                    <div>
                      {category.layout.icon}
                      <ul>
                        <li>
                          {data.bedroom} {`bedroom${data.bedroom > 1 && "s"}`}
                        </li>
                        <li>
                          {data.bathroom} {`bathroom${data.bedroom > 1 && "s"}`}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="post-about-home">
                <li>
                  <span>Available</span>
                  <div>Mar 27, 2023 - 12 month</div>
                </li>
                <li>
                  <span>Type</span>
                  <div>Entire Place</div>
                </li>
                <li>
                  <span>Published</span>
                  <div>{data.created_date}</div>
                </li>
              </ul>
              <div className="post-about">
                <p className="post-body-title">About Home</p>
                <p className="post-about-text">{data.about_home}</p>
              </div>
              <hr />
              <div className="post-about">
                <p className="post-body-title">About roommates</p>
                <p className="post-about-text">{data.about_rommates}</p>
              </div>
              <hr />
              <div className="post-about">
                <p className="post-body-title">About renters</p>
                <p className="post-about-text">{data.about_renters}</p>
              </div>
              <hr />
              <div className="post-amenities">
                <p className="post-body-title">About renters</p>
                <div className="post-amenities-tags">
                  <div className="post-amenities-tag">
                    {category.home.icon}
                    <p> {category.home.name}</p>
                  </div>
                  <div className="post-amenities-tag">
                    {category.wifi.icon}
                    <p> {category.wifi.name}</p>
                  </div>
                  <div className="post-amenities-tag">
                    {category.security.icon}
                    <p> {category.security.name}</p>
                  </div>
                  <div className="post-amenities-tag">
                    {category.elevator.icon}
                    <p> {category.elevator.name}</p>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <p className="post-body-title">Map</p>
                <div className="post-map">
                  <MapContent
                    submit={() => {}}
                    coors={[43.238949, 43.238949]}
                  />
                </div>
              </div>
            </div>
            <div className="post-card">
              <div className="post-card-header">
                <p className="post-card-title">Rent price</p>
                <p className="post-card-price">
                  {price} tg<span>/month</span>
                </p>
              </div>
              <hr />
              <div className="post-card-body">
                <div className="post-card-author">
                  <p className="post-card-title">Author</p>
                  <div className="post-author">
                    <img src={profile} alt="" />
                    <div className="post-author-info">
                      <p className="post-author-name">Madina Alzhan</p>
                      <p className="post-author-job">
                        Landlord/comp/specialist
                      </p>
                      <p className="post-author-phone">+7 707 855 2200</p>
                    </div>
                  </div>
                </div>
                <div className="post-card-btns">
                  <button className="post-author-chat">
                    <CommentIcon sx={{ color: "white", mr: "2px" }} />
                    Start a chat
                  </button>
                  <button className="post-author-more">
                    <CommentIcon sx={{ color: "#5681FB", mr: "2px" }} />
                    Get more info about author
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="similarListing wrapper">
        <p className="similarListing-title">Similar listing</p>
        <div className="similarListing-container"></div>
      </div>
    </div>
  );
};
