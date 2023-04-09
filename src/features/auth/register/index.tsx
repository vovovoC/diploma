import { Register } from "../../../entities/auth/ui";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { ErrorBoundary } from "../../../app/components/ErrorBoundary";
import { register } from "../../../shared/model";

export const RegisterContent = (props: any) => {
  const navigate = useNavigate();
  const { isLoading, isError, error, mutate, isSuccess } =
    useMutation(register);

  const handleSubmit = (values: any) => {
    mutate(values);

    const ntf = [
      ...props.ntfList,
      {
        id: props.ntfList.length,
        type: "success",
        title: "Registered!",
        msg: "You has been registered successfully.",
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

  return <Register isLoading={isLoading} handleSubmit={handleSubmit} />;
};
