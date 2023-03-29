import { useState } from "react";
import { PostDetail } from "../../entities/detail-post/ui";
import { useQuery } from "react-query";
import { getPostId } from "../../shared/model";
import { ErrorBoundary } from "../../app/components/ErrorBoundary";
import { Loader } from "../../app/components/Loader";
import { PostDetailData } from "../../shared/types";

export const PostDetailContent = () => {
  const [open, setOpen] = useState(false);
  const id: number = 1;
  const { isLoading, isError, data, error, refetch } = useQuery(
    "POST_DETAIL",
    async () => await getPostId(id)
  );

  if (isError) {
    return <ErrorBoundary error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>{data && <PostDetail open={open} setOpen={setOpen} data={data[0]} />} </>
  );
};
