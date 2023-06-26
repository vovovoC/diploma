// @ts-nocheck
import { NoData } from "src/app/components/NoData";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ErrorBoundary } from "../../../app/components/ErrorBoundary";
import { Loader } from "../../../app/components/Loader";
import { useCategories } from "../../../entities/category/model";
import { RoommatePostList } from "../../../entities/post-list/ui";
import { getRoommatePosts } from "../../../shared/model";

export const RoommatePostListContent = () => {
  const { filterData } = useCategories();
  const userId = localStorage.getItem("user_id");

  const [page, setPage] = useState(1);
  const { isLoading, isError, data, refetch, error } = useQuery(
    "ROOMMATE_LIST",
    async () =>
      await getRoommatePosts({
        ...filterData,
        page,
        limit: 9,
        user_id: Number(userId),
      })
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

  return (
    <>
    { data?.length > 0 
      ? <RoommatePostList data={data} setPage={setPage} />
      : <NoData />
    }
    </>
)
};
