// @ts-nocheck
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { RoommatePostList } from "src/entities/post-list/ui";
import { ErrorBoundary } from "../../../app/components/ErrorBoundary";
import { Loader } from "../../../app/components/Loader";
import { FavPostList } from "../../../entities/fav-posts/ui";
import { getFavRoommatePosts } from "../../../shared/model";

export const FavRoommateListContent = () => {
  const userId = localStorage.getItem("user_id");
  const [page, setPage] = useState(1);
  const { isLoading, isError, data, refetch, error } = useQuery(
    "FAV_ROOMMATE_POST_LIST",
    async () => await getFavRoommatePosts(userId, { page, limit: 10 })
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

  return <> {data && <RoommatePostList setPage={setPage} data={data} />} </>;
};
