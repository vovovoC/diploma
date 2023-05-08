import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ErrorBoundary } from "../../../app/components/ErrorBoundary";
import { Loader } from "../../../app/components/Loader";
import { RoomAddPost } from "../../../entities/post-add/ui";
import {
  createUserAccomodationPost,
  getAccomodationPostId,
} from "../../../shared/model";

interface Props {
  isEdit: boolean;
}

export const RoomAddPostContent = ({ isEdit }: Props) => {
  const [initialValues, setValues] = useState<any>({
    price: null,
    location: "",
    street: "",
    duration: null,
    image: [],
    room_nums: null,
    amenities: [],
    coordinates: [],
    about_roommate: "",
    about_renter: "",
    about_home: "",
  });
  const params = useParams();
  const {
    isLoading: isLoadingPost,
    data,
    error: errorPost,
  } = useQuery(
    "POST_ROOM_CHANGE",
    async () => await getAccomodationPostId(params.id!),
    {
      enabled: !!params.id && isEdit,
    }
  );

  useEffect(() => {
    if (data) {
      setValues(data);
    }
  }, [data]);

  const { isLoading, isError, error, mutate } = useMutation(
    createUserAccomodationPost
  );

  const create = (values: any) => {
    const user_id = localStorage.getItem("user_id");
    mutate({ ...values, user_id });
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
