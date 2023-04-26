import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { ErrorBoundary } from "../../app/components/ErrorBoundary";
import { Loader } from "../../app/components/Loader";
import { setUser } from "../../entities/auth/model/save";
import { UserInfo } from "../../entities/user-info/ui";
import { editMyProfile, getUserInfo } from "../../shared/model";

export const UserInfoContent = () => {
  const userId = localStorage.getItem("user_id");
  const { isLoading, isError, data, error } = useQuery(
    "USER_INFO",
    async () => await getUserInfo(Number(userId)),
    { enabled: !!userId }
  );

  const { mutate, isLoading: isLoadingEdit } = useMutation(
    (values: any) => editMyProfile(values),
    {
      onSuccess(data) {
        toast.success("Edit successfully");
        dispatch(setUser(data));
      },
      onError(error: any) {
        toast.error("Edit not successfully");
      },
    }
  );

  if (isError) {
    return <ErrorBoundary error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }

  // @ts-ignore
  return <UserInfo data={data[0]} edit={mutate} isLoading={isLoadingEdit} />;
};
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
