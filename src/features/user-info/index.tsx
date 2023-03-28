import { useQuery } from "react-query";
import { ErrorBoundary } from "../../app/components/ErrorBoundary";
import { Loader } from "../../app/components/Loader";
import { UserInfo } from "../../entities/user-info/ui";
import { getUserInfo } from "../../shared/model";

export const UserInfoContent = () => {
  const { isLoading, isError, data } = useQuery(
    "USER_INFO",
    async () => await getUserInfo()
  );

  if (isError) {
    return <ErrorBoundary />;
  }
  if (isLoading) {
    return <Loader />;
  }

  return (
    <UserInfo data={data} />
  );
};
