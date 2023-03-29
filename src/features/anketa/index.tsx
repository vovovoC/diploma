// @ts-nocheck
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ErrorBoundary } from "../../app/components/ErrorBoundary";
import { Loader } from "../../app/components/Loader";
import { Anketa } from "../../entities/anketa/ui";
import { getAnketa } from "../../shared/model";

export const AnketaContent = () => {
  const { isLoading, isError, data, error, refetch } = useQuery(
    "ANKETA",
    async () => await getAnketa()
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

  return <Anketa data={data} />;
};
