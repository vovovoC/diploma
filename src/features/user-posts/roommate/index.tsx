// @ts-nocheck
import { NoData } from "src/app/components/NoData";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ErrorBoundary } from "../../../app/components/ErrorBoundary";
import { Loader } from "../../../app/components/Loader";
import { RoommatePostList } from "../../../entities/post-list/ui";
import { getUserRoommatePosts } from "../../../shared/model";

export const UserRoommatePostContent = () => {
  const userId = localStorage.getItem("user_id");

  const [page, setPage] = useState(1);
  const { isLoading, isError, data, refetch, error } = useQuery(
    "USER_ROOMMATE_LIST",
    async () => await getUserRoommatePosts(userId, { page, limit: 9 })
  );

  useEffect(() => {
    refetch();
  }, [refetch, page]);

  if (isError) {
    return <ErrorBoundary error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {data?.lastPage > 1 ? (
        <RoommatePostList data={data} setPage={setPage} />
      ) : (
        <NoData />
      )}
    </>
  );
};
