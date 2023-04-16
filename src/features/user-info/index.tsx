import { useQuery } from "react-query";
import { ErrorBoundary } from "../../app/components/ErrorBoundary";
import { Loader } from "../../app/components/Loader";
import { UserInfo } from "../../entities/user-info/ui";
import { getUserInfo } from "../../shared/model";

export const UserInfoContent = () => {
  const id = 1;
  const { isLoading, isError, data, error } = useQuery(
    "USER_INFO",
    async () => await getUserInfo(id)
  );

  if (isError) {
    return <ErrorBoundary error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }

  return <UserInfo data={data} />;
};
