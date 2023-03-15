import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Post } from "../../../../app/components/Post";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "../../../../app/assets/style/index.scss";
import "./index.scss";
import { getPostList, usePostList } from "../../model";
import { useCategories } from "../../../category/model";

export const PostList = () => {
  const dispatch = useDispatch<any>();
  const { filterData } = useCategories();
  const { isLoading, data } = usePostList();

  const [page, setPage] = useState(1);

  useEffect(() => {
    // request by 2 times fix
    // ?limit=10&page=1
    dispatch(getPostList({ ...filterData, page, limit: 10 }));
  }, [dispatch, filterData, page]);

  return (
    <div className="wrapper">
      <div className="post-list">
        {isLoading ? (
          <div>loading</div>
        ) : (
          Array.isArray(data) && data.map((value: any) => <Post item={value} />)
        )}
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
