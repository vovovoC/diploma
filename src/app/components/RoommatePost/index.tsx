import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import HomeIcon from "@mui/icons-material/Home";
import WifiIcon from "@mui/icons-material/Wifi";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import "./index.scss";

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
  },
  fn: () => void;
}

export const RoommatePost = (props: Props) => {
  const { item, fn } = props;
  const getImage = (item: string) => {
    return `http://89.218.32.7:8080/images/${item}`;
  };
  const defaultImage =
    "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";
  return (
    <Card sx={{ maxWidth: 345, height: 350}} className="card" onClick={() => fn()}>
    <CardMedia
      sx={{ height: 200, borderRadius: "6px" }}
      title="User Image"
      image={item.image?.length > 1 ? getImage(item.image) : defaultImage}
    />
    <CardContent sx={{ m: "5px 10px 0px 30px" }}>
      <Grid container spacing={2}>
        <Grid
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ display: "flex", alignItems: "center" }}>
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
          </Typography>
          <CardActions>
            <IconButton
              aria-label="add to favorites"
              sx={{ border: "1px solid #C7C7C7", p: "6px 5px 4px" }}
            >
              <FavoriteIcon sx={{ color: "#5681FB" }} />
            </IconButton>
          </CardActions>
        </Grid>
        <Grid xs={12} sx={{
              fontFamily: "poppins400",
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "0.01em",
              color: "#777676",
              display: "flex",
              flexDirection: "column"
            }}>
          <Typography
            gutterBottom>
            Almaty
          </Typography>
          <Typography sx={{
            fontSize: "11px",
            lineHeight: "116%",
            color: "#000000",
          }}>
            Hello! I am a 27-year-old actress and also work in hospitality as well as some remote...
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sx={{
            pt: "1rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
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
