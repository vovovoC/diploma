// @ts-nocheck
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ErrorBoundary } from "../../../app/components/ErrorBoundary";
import { Loader } from "../../../app/components/Loader";
import { useCategories } from "../../../entities/category/model";
import { RoomPostList } from "../../../entities/post-list/ui";
import { getUserAccomodationPosts } from "../../../shared/model";

export const UserRoomPostContent = () => {
  const { filterData } = useCategories();

  const [page, setPage] = useState(1);
  const { isLoading, isError, data, refetch, error } = useQuery(
    "ROOM_ROOMMATE_LIST",
    async () =>
      await getUserAccomodationPosts({ ...filterData, page, limit: 9 })
  );

  console.log("here");

  useEffect(() => {
    refetch();
  }, [filterData, refetch, page]);

  if (isError) {
    return <ErrorBoundary error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }

  return <RoomPostList data={data} setPage={setPage} />;
};
