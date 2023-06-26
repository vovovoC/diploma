// @ts-nocheck
import { NoData } from "src/app/components/NoData";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ErrorBoundary } from "../../../app/components/ErrorBoundary";
import { Loader } from "../../../app/components/Loader";
import { FavPostList } from "../../../entities/fav-posts/ui";
import { getFavRoomPosts } from "../../../shared/model";

export const FavRoomListContent = () => {
  const [page, setPage] = useState(1);
  const userId = localStorage.getItem("user_id");
  const { isLoading, isError, data, refetch, error } = useQuery(
    "FAV_ROOM_POST_LIST",
    async () => await getFavRoomPosts(userId, { page, limit: 10 })
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

  return (
    <> 
    { data?.length > 0 
      ? <FavPostList setPage={setPage} data={data} />
      : <NoData />
    }
    </>
    
  )
};
