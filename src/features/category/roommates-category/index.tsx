import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { ErrorBoundary } from "../../../app/components/ErrorBoundary";
import { Loader } from "../../../app/components/Loader";
import { setCategoryFilter } from "../../../entities/category/model";
import { RoommateCategoryBar } from "../../../entities/category/ui";
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

export const RoommateCategoryContent = () => {
  const { isLoading, isError, data, error } = useQuery(
    "CATEGORIES_ROMMATE",
    async () => await getCategories()
  );

  const dispatch = useDispatch<any>();

  const handleSubmit = (values: Value) => {
    dispatch(setCategoryFilter(values));
  };

  const getKeyword = (val: string) => {

  }
  if (isError) {
    return <ErrorBoundary error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }

  return <RoommateCategoryBar data={data} submit={handleSubmit} getkeyword={getKeyword}/>;
};
