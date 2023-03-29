import { useQuery } from "react-query";
import { getUserPosts } from "../../shared/model";
import { ErrorBoundary } from "../../app/components/ErrorBoundary";
import { Loader } from "../../app/components/Loader";
import { PostChange } from "../../entities/post-change/ui";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createNewPost, editPost } from "../../entities/post-change/model";

export const PostChangeContent = ({ isEdit }: { isEdit: boolean }) => {
  const params = useParams();
  const { isLoading, isError, data, error } = useQuery(
    "POST_CHANGE",
    async () => await getUserPosts(params.id!),
    { enabled: !!params.id && isEdit }
  );

  const dispatch = useDispatch<any>();

  const handleSubmit = (values: any) => {
    if (isEdit) {
      dispatch(createNewPost(values));
    } else {
      dispatch(editPost(values));
    }
  };

  if (isError) {
    return <ErrorBoundary error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }

  return (
    <PostChange initialValues={data} submit={handleSubmit} isEdit={isEdit} />
  );
};
