import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Post } from "../../../../app/components/Post";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./index.scss";
import { useCategories } from "../../../category/model";
import { getPosts } from "../../../../shared/model";
import { Loader } from "../../../../app/components/Loader";

export const PostList = () => {
  const { filterData } = useCategories();

  const [page, setPage] = useState(1);
  const { isLoading, isError, data, refetch } = useQuery(
    "POST_LIST",
    async () => await getPosts({ ...filterData, page, limit: 10 })
  );

  useEffect(() => {
    refetch();
  }, [filterData]);

  if (isError) {
    return <div>error</div>;
  }

  return (
    <div className="wrapper">
      <div className="post-list">
        {isLoading ? (
          <Loader />
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
