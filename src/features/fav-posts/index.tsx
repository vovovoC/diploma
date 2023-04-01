// @ts-nocheck
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ErrorBoundary } from "../../app/components/ErrorBoundary";
import { Loader } from "../../app/components/Loader";
import { FavPostList } from "../../entities/fav-posts/ui";
import { getFavPosts } from "../../shared/model";

export const FavPostListContent = () => {
  const [page, setPage] = useState(1);
  const { isLoading, isError, data, refetch, error } = useQuery(
    "FAV_POST_LIST",
    async () => await getFavPosts({ page, limit: 10 })
  );

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  if (isError) {
    return <ErrorBoundary error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }

  return <> {data && <FavPostList setPage={setPage} data={data} />} </>;
};