import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Login } from "../../../entities/auth/ui";
import { login } from "../../../shared/model";
import { userInfo } from "../../../entities/auth/model/save";

export const LoginContent = (props: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation((values: any) => login(values), {
    onSuccess(data) {
      queryClient.invalidateQueries("login");
      toast.success("Login successfully");
      localStorage.setItem("token", data.token);
      localStorage.setItem("user_id", `${data.id}`);
      dispatch(userInfo() as any);

      setTimeout(() => {
        navigate("/");
      }, 1000);
    },
    onError(error: any) {
      toast.error("Login not successfully");
    },
  });

  return <Login handleSubmit={mutate} isLoading={isLoading} />;
};
