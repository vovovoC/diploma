import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ErrorBoundary } from "../../../app/components/ErrorBoundary";
import { Loader } from "../../../app/components/Loader";
import { RoommateAddPost } from "../../../entities/post-add/ui";
import { createRommatePost, getRommatePost } from "../../../shared/model";

interface Props {
  isEdit: boolean;
}

export const RoommateAddPostContent = ({ isEdit }: Props) => {
  const [initialValues, setValues] = useState<any>({
    username: null,
  });
  const params = useParams();
  const {
    isLoading: isLoadingPost,
    data,
    error: errorPost,
    isError: isErrorPost,
  } = useQuery(
    "POST_ROOMMATE_GET",
    async () => await getRommatePost(params.id!),
    {
      enabled: !!params.id && isEdit,
    }
  );

  useEffect(() => {
    if (data) {
      setValues(data);
    }
  }, [data]);

  const { isLoading, isError, error, mutate } = useMutation(createRommatePost);

  const create = (values: any) => {
    mutate(values);
  };

  if (isError) {
    return <ErrorBoundary error={error} />;
  }
  if (isErrorPost) {
    return <ErrorBoundary error={errorPost} />;
  }
  if (isLoadingPost) {
    return <Loader />;
  }

  return (
    <RoommateAddPost
      create={create}
      isLoading={isLoading}
      initialValues={initialValues}
    />
  );
};
