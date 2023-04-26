import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";

import "./index.scss";
import { addFavRoommatePostList } from "../../../entities/fav-posts/model/fav-post";
import { useState } from "react";

interface Props {
  item: {
    city: string;
    location: string;
    description: string;
    id: string;
    category: number;
    price: number;
    image: string;
    amenities: string[];
    duraction: string;
    rooms: number;
    gender: number;
    verified: boolean;
  };
  fn: () => void;
}

export const RoommatePost = (props: Props) => {
  const { item, fn } = props;
  const [saved, setSaved] = useState(false);
  const dispatch = useDispatch();
  const getImage = (img: string) => {
    return `http://159.223.21.6/images/${img}`;
  };
  const defaultImage =
    "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";
  return (
    <Card
      sx={{ maxWidth: 345, height: 350 }}
      className="card"
      onClick={() => fn()}
    >
      <CardMedia
        sx={{ height: 200, borderRadius: "6px" }}
        title="User Image"
        image={item.image?.length > 0 ? getImage(item.image[0]) : defaultImage}
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
            <Typography
              sx={{
                fontFamily: "poppins700",
                fontSize: "24px",
                lineHeight: "36px",
                letterSpacing: "0.01em",
                color: "#000000",
              }}
            >
              Jasmina, 19
            </Typography>
            <CardActions>
              <IconButton
                aria-label="add to favorites"
                sx={{ border: "1px solid #C7C7C7", p: "6px 5px 4px" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSaved(!saved);
                  dispatch(
                    addFavRoommatePostList({ post_id: Number(item.id) }) as any
                  );
                }}
              >
                {saved ? (
                  <FavoriteIcon sx={{ color: "#5681FB" }} />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </IconButton>
            </CardActions>
          </Grid>
          <Grid
            sx={{
              fontFamily: "poppins400",
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0.01em",
              color: "#777676",
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Typography gutterBottom>Almaty</Typography>
            <Typography
              sx={{
                fontSize: "11px",
                lineHeight: "116%",
                color: "#000000",
              }}
            >
              Hello! I am a 27-year-old actress and also work in hospitality as
              well as some remote...
            </Typography>
          </Grid>
          <Grid
            sx={{
              pt: "1rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              gutterBottom
              sx={{
                fontSize: "10px",
                lineHeight: "15px",
                letterSpacing: "0.01em",
                color: "#0C4BFF",
                padding: "2px 9px",
                marginRight: "6px",
                background: "#E0E5FC",
                border: "0.5px solid #69A3F9",
                borderRadius: "29px",
              }}
            >
              extroverted
            </Typography>
            <Typography
              gutterBottom
              sx={{
                fontSize: "10px",
                lineHeight: "15px",
                letterSpacing: "0.01em",
                color: "#0C4BFF",
                padding: "2px 9px",
                marginRight: "6px",
                background: "#E0E5FC",
                border: "0.5px solid #69A3F9",
                borderRadius: "29px",
              }}
            >
              artist/creative
            </Typography>
            <Typography
              gutterBottom
              sx={{
                fontSize: "10px",
                lineHeight: "15px",
                letterSpacing: "0.01em",
                color: "#0C4BFF",
                padding: "2px 9px",
                marginRight: "6px",
                background: "#E0E5FC",
                border: "0.5px solid #69A3F9",
                borderRadius: "29px",
              }}
            >
              health/wealness
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
