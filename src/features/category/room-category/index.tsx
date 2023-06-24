import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { ErrorBoundary } from "../../../app/components/ErrorBoundary";
import { Loader } from "../../../app/components/Loader";
import { setCategoryFilter, setKeyword } from "../../../entities/category/model";
import { RoomCategoryBar } from "../../../entities/category/ui";
import { getCategories } from "../../../shared/model";

interface Value {
  age: string;
  gender: string;
  duration: string;
  layout: string;
  inthehome: string;
  location: string;
  price: string;
  room: string;
}

export const RoomCategoryContent = () => {
  const { isLoading, isError, data, error } = useQuery(
    "CATEGORIES",
    async () => await getCategories()
  );

  const dispatch = useDispatch<any>();

  const handleSubmit = (values: Value) => {
    dispatch(setCategoryFilter(values));
  };
  const handleKeyword=(val: any)=>{
    dispatch(setKeyword(val));
  }

  if (isError) {
    return <ErrorBoundary error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }

  return <RoomCategoryBar data={data} submit={handleSubmit} getkeyword={handleKeyword}/>;
};
