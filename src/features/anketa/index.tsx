// @ts-nocheck
import { useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ErrorBoundary } from "../../app/components/ErrorBoundary";
import { Loader } from "../../app/components/Loader";
import { Anketa } from "../../entities/anketa/ui";
import {
  deleteUser,
  editAnketa,
  getAnketa,
  getUserInfo,
} from "../../shared/model";

export const AnketaContent = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("user_id");

  const { isLoading: isLoadingUser, data: userInfo } = useQuery(
    "USER_INFO",
    async () => await getUserInfo(userId),
    { enabled: !!userId }
  );
  const { isLoading, isError, data, error, refetch } = useQuery(
    "ANKETA",
    async () => await getAnketa(userId),
    { enabled: !!userId }
  );

  useEffect(() => {
    refetch();
  }, [refetch]);

  const { mutate } = useMutation((values: any) => deleteUser(values), {
    onSuccess(data) {
      toast.success("Delete successfully");
      navigate("/register");
    },
    onError(error: any) {
      toast.error("Delete not successfully");
    },
  });

  const { mutate: handleEdit } = useMutation(
    (values: any) => editAnketa(values),
    {
      onSuccess(data) {
        toast.success("Edit successfully");
        refetch();
      },
      onError(error: any) {
        toast.error("Edit not successfully");
      },
    }
  );

  const handleDelete = () => {
    mutate(userId);
  };

  if (isError) {
    return <ErrorBoundary error={error} />;
  }
  if (isLoading || isLoadingUser) {
    return <Loader />;
  }

  return (
    <>
      {data?.length > 0 && (
        <Anketa
          data={data?.[0]}
          deleteData={userInfo}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      )}
    </>
  );
};
