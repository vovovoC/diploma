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
  const userId = localStorage.getItem("user_id");

  const [page, setPage] = useState(1);
  const { isLoading, isError, data, refetch, error } = useQuery(
    "USER_ROOM_LIST",
    async () => await getUserAccomodationPosts(userId, { page, limit: 9 })
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

  return (
    <>
      {data?.lastPage > 1 ? (
        <RoomPostList data={data} setPage={setPage} />
      ) : (
        "no data"
      )}
    </>
  );
};
