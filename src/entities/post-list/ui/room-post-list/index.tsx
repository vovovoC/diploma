import { Post } from "../../../../app/components/Post";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

import "./index.scss";
interface Props {
  data: any[];
  setPage: (p: number) => {};
}
export const RoomPostList = ({ data, setPage }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <div className="post-list">
        {Array.isArray(data) &&
          data.map((value: any, index: number) => (
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
          count={10}
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
