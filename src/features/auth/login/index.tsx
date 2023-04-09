import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { ErrorBoundary } from "../../../app/components/ErrorBoundary";
import { Login } from "../../../entities/auth/ui";
import { login } from "../../../shared/model";

export const LoginContent = (props: any) => {
  const navigate = useNavigate();
  const { isLoading, isError, error, mutate, isSuccess } = useMutation(login);

  const handleSubmit = (values: any) => {
    mutate(values);
    const ntf = [
      ...props.ntfList,
      {
        id: props.ntfList.length,
        type: "success",
        title: "Success",
        msg: "Success Login",
      },
      {
        id: props.ntfList.length + 1,
        type: "warning",
        title: "Warning",
        msg: "Just warning",
      },
      {
        id: props.ntfList.length + 2,
        type: "danger",
        title: "Danger",
        msg: "Can not connect to server",
      },
    ];

    props.showNtf(ntf);
    setTimeout(() => {
      if (isSuccess) {
        navigate("/");
      }
    }, 100);
  };
  if (isError) {
    return <ErrorBoundary error={error} />;
  }
  return <Login handleSubmit={handleSubmit} isLoading={isLoading} />;
};
