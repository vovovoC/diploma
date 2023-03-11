import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./index.scss";

interface Props {
  item: {
    city: string;
    location: string;
    description: string;
    id: string;
    category: number;
    price: number;
    img: string;
    amenities: string[];
    duraction: string;
    rooms: number;
    gender: number;
    verified: boolean;
  };
}

export const Post = (props: Props) => {
  const { item } = props;
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardMedia sx={{ height: 140 }} image={item.img} title={item.location} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.city}, {item.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
