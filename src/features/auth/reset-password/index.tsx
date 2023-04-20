import { ResetPassword } from "../../../entities/auth/ui";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../../shared/model";
import { toast } from "react-toastify";

export const ResetPasswordContent = (props: any) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    (values: any) => resetPassword(values),
    {
      onSuccess(data) {
        queryClient.invalidateQueries("reset password");
        toast.success("Your password has been changed successfully.");
        // localStorage.setItem("token", data.token);
        // localStorage.setItem("user_id", `${data.id}`);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      },
      onError(error: any) {
        toast.error("Login not successfully");
      },
    }
  );

  return <ResetPassword handleSubmit={mutate} isLoading={isLoading} />;
};
