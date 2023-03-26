import { useState } from "react";
import { PostDetail } from "../../entities/detail-post/ui";
import { useQuery } from "react-query";
import { getPostId } from "../../shared/model";
import { ErrorBoundary } from "../../app/components/ErrorBoundary";
import { Loader } from "../../app/components/Loader";

export const PostDetailContent = () => {
  const [open, setOpen] = useState(false);
  const id: number = 1;
  const { isLoading, isSuccess, isError, data, error, refetch } = useQuery(
    "POST_DETAIL",
    async () => await getPostId(id)
  );

  if (isError) {
    return <ErrorBoundary />;
  }
  if (isLoading) {
    return <Loader />;
  }
  return <PostDetail open={open} setOpen={setOpen} />;
};
