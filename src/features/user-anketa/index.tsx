// @ts-nocheck
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ErrorBoundary } from "../../app/components/ErrorBoundary";
import { Loader } from "../../app/components/Loader";
import { UserAnketa } from "../../entities/user-anketa";
import { getAnketa } from "../../shared/model";

export const UserAnketaContent = () => {
  const params = useParams();
  
  const { isLoading, isError, data, error, refetch } = useQuery(
    "ANKETA_USER_PROFILE",
    async () => await getAnketa(Number(params.id )),
    { enabled: !!params.id }
  );

  console.log(params.id )
  useEffect(() => {
    refetch();
  }, [refetch]);

  if (isError) {
    return <ErrorBoundary error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }

  return <UserAnketa data={data} />;
};
