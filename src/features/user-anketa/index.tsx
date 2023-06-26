// @ts-nocheck
import { NoData } from "src/app/components/NoData";
import { useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { ErrorBoundary } from "../../app/components/ErrorBoundary";
import { Loader } from "../../app/components/Loader";
import { UserAnketa } from "../../entities/user-anketa";
import { getAnketa, editRating } from "../../shared/model";

export const UserAnketaContent = () => {
  const params = useParams();
  
  const { isLoading, isError, data, error, refetch } = useQuery(
    "ANKETA_USER_PROFILE",
    async () => await getAnketa(Number(params.id )),
    { enabled: !!params.id }
  );

  const { mutate: mutateRating } = useMutation(
    (values: any) => editRating(params.id , values),
    {
      onSuccess(data) {
        toast.success("Rating added successfully");
        dispatch(setUser(data));
      },
      onError(error: any) {
        toast.error("Rating added not successfully");
      },
    }
  );

  const setRate = (rating: number) => {
    mutateRating({rating});
    refetch();
  }

  if (isError) {
    return <ErrorBoundary error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }

  return <>{Array.isArray(data) ? <UserAnketa data={data[0]} rate={data[0]?.rating} setRate={setRate} /> : <NoData/>}</>;
};
