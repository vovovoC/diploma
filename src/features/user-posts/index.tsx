// @ts-nocheck
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ErrorBoundary } from "../../app/components/ErrorBoundary";
import { Loader } from "../../app/components/Loader";
import { UserPostList } from "../../entities/user-posts/ui";
import { getUserPosts } from "../../shared/model";

export const UserPostListContent = () => {
  const [page, setPage] = useState(1);
  const { isLoading, isError, data, refetch, error } = useQuery(
    "USER_POST_LIST",
    async () => await getUserPosts({ page, limit: 10 })
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

  return <>{data && <UserPostList setPage={setPage} data={data} />}</>;
};
