import { ResetPassword } from "../../../entities/auth/ui";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { ErrorBoundary } from "../../../app/components/ErrorBoundary";
import { resetPassword } from "../../../shared/model";

export const ResetPasswordContent = (props: any) => {
  const navigate = useNavigate();
  const { isLoading, isError, error, mutate, isSuccess } =
    useMutation(resetPassword);

  const handleSubmit = (values: any) => {
    mutate(values);

    //notification msgs
    const ntf = [
      ...props.ntfList,
      {
        id: props.ntfList.length,
        type: "success",
        title: "Password Changed!",
        msg: "Your password has been changed successfully.",
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

  return <ResetPassword handleSubmit={handleSubmit} isLoading={isLoading} />;
};
