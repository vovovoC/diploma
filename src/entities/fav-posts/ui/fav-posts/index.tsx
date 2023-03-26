import { Post } from "../../../../app/components/Post";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./index.scss";
interface Props {
  data: any[];
  setPage: (p: number) => {};
}
export const FavPostList = ({ data, setPage }: Props) => {
  return (
    <div className="wrapper">
      <div className="post-list">
        {Array.isArray(data) && data.map((value: any) => <Post item={value} />)}
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
