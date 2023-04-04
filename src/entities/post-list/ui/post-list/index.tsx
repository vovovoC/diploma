import { Post } from "../../../../app/components/Post";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

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
}
export const PostList = ({ data, setPage }: Props) => {
  const navigate = useNavigate();
  console.log(data);
  return (
    <div className="wrapper">
      <div className="post-list">
        {Array.isArray(data.data) &&
          data.data?.map((value: any, index: number) => (
            <div
              key={index}
              onClick={() => {
                navigate(`/posts/${value.id}`);
              }}
            >
              <Post item={value} />
            </div>
          ))}
      </div>
      <Stack spacing={2}>
        <Pagination
          count={data.lastPage}
          color="primary"
          sx={{ m: "2rem auto 3rem" }}
          onChange={(_e, p) => {
            setPage(p);
          }}
        />
      </Stack>
    </div>
  );
};
