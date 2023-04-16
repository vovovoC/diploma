// @ts-nocheck
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ErrorBoundary } from "../../../app/components/ErrorBoundary";
import { Loader } from "../../../app/components/Loader";
import { useCategories } from "../../../entities/category/model";
import { RoommatePostList } from "../../../entities/post-list/ui";
import { getUserRoommatePosts } from "../../../shared/model";

export const UserRoommatePostContent = () => {
  const { filterData } = useCategories();

  const [page, setPage] = useState(1);
  const { isLoading, isError, data, refetch, error } = useQuery(
    "USER_ROOMMATE_LIST",
    async () => await getUserRoommatePosts({ ...filterData, page, limit: 9 })
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

  return <RoommatePostList data={data} setPage={setPage} />;
};
