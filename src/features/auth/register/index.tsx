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
    mutate(values, {
      onSuccess(res) {
        const ntf = [
          ...props.ntfList,
          {
            id: props.ntfList.length,
            type: "success",
            title: "Registered!",
            msg: "You has been registered successfully.",
          },
        ];
        console.log(res, "RSULt");

        props.showNtf(ntf);
        navigate("/");
      },
      onError() {},
    });
  };
  if (isError) {
    return <ErrorBoundary error={error} />;
  }

  return <Register isLoading={isLoading} handleSubmit={handleSubmit} />;
};
