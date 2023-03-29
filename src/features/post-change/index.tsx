import { useQuery } from "react-query";
import { getUserPosts } from "../../shared/model";
import { ErrorBoundary } from "../../app/components/ErrorBoundary";
import { Loader } from "../../app/components/Loader";
import { PostChange } from "../../entities/post-change/ui";
import { useParams } from "react-router-dom";

export const PostChangeContent = ({ isEdit }: { isEdit: boolean }) => {
  const params = useParams();
  const { isLoading, isError, data, error } = useQuery(
    "POST_CHANGE",
    async () => await getUserPosts(params.id!),
    { enabled: !!params.id && isEdit }
  );

  if (isError) {
    return <ErrorBoundary error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }
  return <PostChange initialValues={data} />;
};
