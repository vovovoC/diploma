import { Register } from "../../../entities/auth/ui";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { register } from "../../../shared/model";
import { toast } from "react-toastify";

export const RegisterContent = (props: any) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation((values: any) => register(values), {
    onSuccess(data) {
      queryClient.invalidateQueries("register");
      toast.success("register successfully");
      // localStorage.setItem("token", data.token);
      // localStorage.setItem("user_id", `${data.id}`);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    },
    onError(error: any) {
      toast.error("Login not successfully");
    },
  });

  return <Register isLoading={isLoading} handleSubmit={mutate} />;
};
