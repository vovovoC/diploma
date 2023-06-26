import { Post } from "../../../../app/components/Post";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./index.scss";
interface Props {
  data:{
    data:  any[];
    lastPage: number;
  };
  setPage: (p: number) => {};
}
export const FavPostList = ({ data, setPage }: Props) => {
  return (
    <div className="fav-posts">
      <div className="fav-post-list">
        {Array.isArray(data?.data) && data?.data.map((value: any) => <Post item={value} />)}
      </div>
     { data?.lastPage > 1 && <Stack spacing={2}>
         <Pagination
           count={data?.lastPage}
           color="primary"
           sx={{ m: "2rem auto 3rem" }}
           onChange={(_e, p) => {
             setPage(p);
           }}
         />
       </Stack>
     }

    </div>
  );
};
