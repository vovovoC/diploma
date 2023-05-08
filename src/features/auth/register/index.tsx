import { Register } from "src/entities/auth/ui";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { register } from "src/shared/model";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userInfo } from "src/entities/auth/model/save";

export const RegisterContent = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { mutate, isLoading } = useMutation((values: any) => register(values), {
    onSuccess(data) {
      queryClient.invalidateQueries("register");
      toast.success("register successfully");
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

  return <Register isLoading={isLoading} handleSubmit={mutate} />;
};
