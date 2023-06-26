// @ts-nocheck
import { NoData } from "src/app/components/NoData";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ErrorBoundary } from "../../../app/components/ErrorBoundary";
import { Loader } from "../../../app/components/Loader";
import { useCategories } from "../../../entities/category/model";
import { RoomPostList } from "../../../entities/post-list/ui";
import { getAccomodationPosts } from "../../../shared/model";

export const RoomPostListContent = ({type='basic'}) => {
  const { filterData, keyword } = useCategories();
  const userId = localStorage.getItem("user_id");

  const [page, setPage] = useState(1);
  const { isLoading, isError, data, refetch, error } = useQuery(
    "POST_LIST",
    async () =>
      await getAccomodationPosts({
        ...filterData,
        page,
        limit: 9,
        user_id: Number(userId),
      })
  );

  useEffect(() => {
    refetch();
    console.log('here', page)
  }, [filterData, refetch, page, keyword]);

  if (isError) {
    return <ErrorBoundary error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
    { data?.data?.length > 0 
      ? <RoomPostList data={data} setPage={setPage} type={type}/>
      : <NoData />
    }
    </>
  );
};
