//@ts-nocheck
import { useState } from "react";
import { PostDetail } from "../../entities/detail-post/ui";
import { useQuery } from "react-query";
import { getPostId } from "../../shared/model";
import { ErrorBoundary } from "../../app/components/ErrorBoundary";
import { Loader } from "../../app/components/Loader";
import { useParams } from "react-router-dom";

export const PostDetailContent = () => {
  const [open, setOpen] = useState(false);
  const params = useParams();
  console.log(params);
  const { isLoading, isError, data, error } = useQuery(
    "POST_DETAIL",
    async () => await getPostId(params.id!),
    { enabled: !!params.id }
  );

  console.log(data);

  if (isError) {
    return <ErrorBoundary error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }
  return <PostDetail open={open} setOpen={setOpen} data={data[0]} />;
};
