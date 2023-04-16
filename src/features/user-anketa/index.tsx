// @ts-nocheck
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ErrorBoundary } from "../../app/components/ErrorBoundary";
import { Loader } from "../../app/components/Loader";
import { UserAnketa } from "../../entities/user-anketa";
import { getAnketa } from "../../shared/model";

export const UserAnketaContent = () => {
  const id = 1;
  const { isLoading, isError, data, error, refetch } = useQuery(
    "ANKETA",
    async () => await getAnketa(id)
  );

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
