// @ts-nocheck
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ErrorBoundary } from "../../app/components/ErrorBoundary";
import { Loader } from "../../app/components/Loader";
import { Anketa } from "../../entities/anketa/ui";
import { getAnketa } from "../../shared/model";

export const AnketaContent = () => {
  const [page, setPage] = useState(1);
  const { isLoading, isError, data, refetch } = useQuery(
    "ANKETA",
    async () => await getAnketa({ page, limit: 10 })
  );

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  if (isError) {
    return <ErrorBoundary />;
  }
  if (isLoading) {
    return <Loader />;
  }

  return (
      <Anketa />
  );
};
