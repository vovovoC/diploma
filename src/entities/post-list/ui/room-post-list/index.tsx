import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Post } from "src/app/components/Post";
import "./index.scss";

interface Data {
  created_date: string;
  description: string;
  image: string[];
  location: string;
  price: number;
  title: string;
}
interface Props {
  data: {
    lastPage: number;
    data: Data[];
  };
  setPage: (p: number) => {};
  type: string
}
export const RoomPostList = ({ data, setPage , type }: Props) => {
  return (
    <div className="wrapper">
      <div className={type==='similar' ? 'post-similar': ""}>
       <div className={type==='similar' ? 'post-similar__list': "post-list"}> {Array.isArray(data?.data) &&
          data?.data?.map((value: any, index: number) => (
            <div key={index}>
              <Post item={value} />
            </div>
          ))}
       </div>
      </div>
      { type==='basic' && <Stack spacing={2}>
        <Pagination
          count={data?.lastPage || 1}
          color="primary"
          sx={{ m: "2rem auto 3rem" }}
          onChange={(_e, p) => {
            setPage(p);
          }}
        />
      </Stack> }
    </div>
  );
};
