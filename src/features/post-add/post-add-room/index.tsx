import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ErrorBoundary } from "../../../app/components/ErrorBoundary";
import { Loader } from "../../../app/components/Loader";
import { RoomAddPost } from "../../../entities/post-add/ui";
import { createUserPost, getUserPost } from "../../../shared/model";

interface Props {
  isEdit: boolean;
}

export const RoomAddPostContent = ({ isEdit }: Props) => {
  const [initialValues, setValues] = useState<any>({
    author: null,
    title: null,
    desc: null,
    price: null,
    location: null,
    image: [],
    user_id: null,
    subcategory_idv: null,
    bedroom_nums: null,
    rental_period: null,
  });
  const params = useParams();
  const {
    isLoading: isLoadingPost,
    data,
    error: errorPost,
  } = useQuery("POST_CHANGE", async () => await getUserPost(params.id!), {
    enabled: !!params.id && isEdit,
  });

  useEffect(() => {
    if (data) {
      setValues(data);
    }
  }, [data]);

  const { isLoading, isError, error, mutate } = useMutation(createUserPost);

  const create = (values: any) => {
    mutate(values);
  };

  if (isError || errorPost) {
    return <ErrorBoundary error={error} />;
  }
  if (isLoadingPost) {
    return <Loader />;
  }

  return (
    <RoomAddPost
      create={create}
      isLoading={isLoading}
      initialValues={initialValues}
    />
  );
};
