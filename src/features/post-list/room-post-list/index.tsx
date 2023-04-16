// @ts-nocheck
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ErrorBoundary } from "../../../app/components/ErrorBoundary";
import { Loader } from "../../../app/components/Loader";
import { useCategories } from "../../../entities/category/model";
import { RoomPostList } from "../../../entities/post-list/ui";
import { getAccomodationPosts } from "../../../shared/model";

export const RoomPostListContent = () => {
  const { filterData } = useCategories();

  const [page, setPage] = useState(1);
  const { isLoading, isError, data, refetch, error } = useQuery(
    "POST_LIST",
    async () => await getAccomodationPosts({ ...filterData, page, limit: 9 })
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

  return <RoomPostList data={data} setPage={setPage} />;
};
