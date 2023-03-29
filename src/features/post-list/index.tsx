// @ts-nocheck
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ErrorBoundary } from "../../app/components/ErrorBoundary";
import { Loader } from "../../app/components/Loader";
import { useCategories } from "../../entities/category/model";
import { PostList } from "../../entities/post-list/ui";
import { getPosts } from "../../shared/model";

export const PostListContent = () => {
  const { filterData } = useCategories();

  const [page, setPage] = useState(1);
  const { isLoading, isError, data, refetch, error } = useQuery(
    "POST_LIST",
    async () => await getPosts({ ...filterData, page, limit: 10 })
  );

  useEffect(() => {
    refetch();
  }, [filterData, refetch, page]);

  if (isError) {
    return <ErrorBoundary error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }

  return <PostList data={data} setPage={setPage} />;
};
