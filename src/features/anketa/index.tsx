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
  createAnketa
} from "../../shared/model";

export const AnketaContent = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("user_id");
  const initialData = {
    email: '...',
    firstname: '...',
    username: '...',
    password: '...',
    lastname: "..."
  }

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
    (values: any) => editAnketa(userId, values),
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


  const { mutate: handleCreate } = useMutation(
    (values: any) => createAnketa(userId, values),
    {
      onSuccess(data) {
        toast.success("Create successfully");
        refetch();
      },
      onError(error: any) {
        toast.error("Create not successfully");
      },
    }
  );

  const handleDelete = () => {
    mutate();
  };

  const handleEditAnketa = (val: any) => {
    if(!data) {
      handleCreate(val)
    }else{ handleEdit(val)}
  }

  if (isError) {
    return <ErrorBoundary error={error} />;
  }
  if (isLoading || isLoadingUser) {
    return <Loader />;
  }

  return  <Anketa
  data={(data && data.length>0) ? data[0]:initialData}
  deleteData={userInfo || {email:"..."}}
  handleDelete={handleDelete}
  handleEdit={handleEdit}
  handleEditAnketa={handleEditAnketa}
  initialValues={{email: userInfo?.email, password: userInfo?.password}}
/>
};
