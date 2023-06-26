// @ts-nocheck
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { ErrorBoundary } from "../../app/components/ErrorBoundary";
import { Loader } from "../../app/components/Loader";
import { setUser, userInfo } from "../../entities/auth/model/save";
import { UserInfo } from "../../entities/user-info/ui";
import { editMyProfile, getUserInfo, editRating, getAnketa } from "../../shared/model";

export const UserInfoContent = () => {
  const dispatch = useDispatch()
  const initialUserData = {
    email: '...',
    firstname: '...',
    username: '...',
    password: '...',
    lastname: "..."
  }
  const [initialData, setInitialDate] = useState({
    user_id: 6,
    additional: "",
    fullname: "",
    age: 22,
    gender: "",
    work: "",
    study: "",
    description: "",
    tags: "",
    phonenumber: "",
    whatsapp: "",
    telegram: "",
    instagram: "",
    image: "",
    rating: 0
})
  const userId = localStorage.getItem("user_id") || 0;
  const { isLoading, isError, data, error } = useQuery(
    "USER_INFO",
    async () => await getUserInfo(Number(userId)),
    { enabled: !!userId }
  );

  const {  data: dataAnketa, refetch } = useQuery(
    "USER_INFO_ANKETA",
    async () => await getAnketa(Number(userId)),
    { enabled: !!userId }
  );


  useEffect(()=> {
  if(Array.isArray(dataAnketa)) {
    setInitialDate({...dataAnketa[0]})
  }
  },[dataAnketa])

  console.log(initialData)

  const { mutate, isLoading: isLoadingEdit } = useMutation(
    (values: any) => editMyProfile(userId, values),
    {
      onSuccess(data) {
        toast.success("Edit successfully");
        dispatch(setUser(data));
      },
      onError(error: any) {
        toast.error("Edit not successfully");
      },
    }
  );

  const { mutate: mutateRating } = useMutation(
    (values: any) => editRating(userId, values),
    {
      onSuccess(data) {
        toast.success("Edit successfully");
        dispatch(setUser(data));
      },
      onError(error: any) {
        toast.error("Edit not successfully");
      },
    }
  );

  const setRate = (rating: number) => {
    mutateRating({rating});
    refetch();
  }

  if (isError) {
    return <ErrorBoundary error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }

  return <UserInfo data={(data && data.length >0) ? data[0] : initialUserData} edit={mutate} isLoading={isLoadingEdit} rate={initialData?.rating || 0} setRate={setRate}/>;
};
