import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import HomeIcon from "@mui/icons-material/Home";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import "./index.scss";
import { useDispatch } from "react-redux";
import { addFavRoomPostList } from "../../../entities/fav-posts/model/fav-post";

interface Props {
  item: {
    id: string;
    location: string;
    address: string;
    square: string;
    bedroom: string;
    gender: string;
    age: string;
    layout: string;
    created_data: string;
    price: number;
    image: string[];
  };
}

export const Post = (props: Props) => {
  const { item } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getImage = (item: string) => {
    return `http://89.218.32.7:8080/images/${item}`;
  };
  const defaultImage =
    "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";

  return (
    <Card
      sx={{ minWidth: 300, maxWidth: 345, height: 400 }}
      className="card"
      onClick={() => {
        navigate(`/posts/${item.id}`);
      }}
    >
      <CardMedia
        sx={{ height: 200, borderRadius: "6px" }}
        image={item.image?.length > 1 ? getImage(item.image[1]) : defaultImage}
        title={item.location}
      />
      <CardContent sx={{ m: "5px 10px 0px 30px" }}>
        <Grid container spacing={2}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  fontFamily: "poppins700",
                  fontSize: "24px",
                  lineHeight: "36px",
                  letterSpacing: "0.01em",
                  color: "#5681FB",
                }}
                component={"span"}
              >
                {item.price}tg
              </Typography>
              <Typography
                sx={{
                  fontFamily: "poppins500",
                  fontSize: "15px",
                  lineHeight: "22px",
                  letterSpacing: "0.01em",
                  color: "#C7C7C7",
                }}
                component={"span"}
              >
                /month
              </Typography>
            </Typography>
            <CardActions>
              <IconButton
                aria-label="add to favorites"
                sx={{ border: "1px solid #C7C7C7", p: "6px 5px 4px" }}
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(
                    addFavRoomPostList({ post_id: Number(item.id) }) as any
                  );
                }}
              >
                <FavoriteIcon sx={{ color: "#5681FB" }} />
              </IconButton>
            </CardActions>
          </Grid>
          <Grid>
            <Typography
              gutterBottom
              sx={{
                fontFamily: "poppins700",
                fontSize: "24px",
                lineHeight: "36px",
                letterSpacing: "0.01em",
                color: "#000000",
              }}
            >
              Location {item.location}
            </Typography>
          </Grid>
          <Grid
            sx={{
              fontFamily: "poppins400",
              fontSize: "18px",
              lineHeight: "27px",
              letterSpacing: "0.01em",
              color: "#777676",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography gutterBottom>{item.address} Address</Typography>
            <Typography>Apr 1 {item.created_data}</Typography>
          </Grid>
          <Grid
            sx={{
              borderTop: "1px solid #C1C1C1",
              mt: "1rem",
              pt: "1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              gutterBottom
              sx={{
                fontFamily: "poppins400",
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "0.01em",
                color: "#777676",
                display: "flex",
                alignItems: "end",
              }}
            >
              <PersonIcon sx={{ color: "#5681FB", mr: "5px" }} />
              Age {item.age}
            </Typography>
            <Typography
              gutterBottom
              sx={{
                fontFamily: "poppins400",
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "0.01em",
                color: "#777676",
                display: "flex",
                alignItems: "end",
              }}
            >
              <BedroomChildIcon sx={{ color: "#5681FB", mr: "5px" }} />
              {item.bedroom}3
            </Typography>
            <Typography
              gutterBottom
              sx={{
                fontFamily: "poppins400",
                fontSize: "14px",
                lineHeight: "21px",
                letterSpacing: "0.01em",
                color: "#777676",
                display: "flex",
                alignItems: "end",
              }}
            >
              <HomeIcon sx={{ color: "#5681FB", mr: "5px" }} />
              {item.layout}Private Room
            </Typography>
          </Grid>
        </Grid>
        {/* <Typography gutterBottom variant="h5" component="div">
          {item.city}, {item.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography> */}
      </CardContent>
    </Card>
  );
};
