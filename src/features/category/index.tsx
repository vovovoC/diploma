import { useFormik } from "formik";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { ErrorBoundary } from "../../app/components/ErrorBoundary";
import { Loader } from "../../app/components/Loader";
import { setCategoryFilter } from "../../entities/category/model";
import { CategoryBar } from "../../entities/category/ui";
import { getCategories } from "../../shared/model";

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

const validate = (values: Value) => {
  const errors: Value = {
    age: "",
    gender: "",
    duration: "",
    layout: "",
    inthehome: "",
    location: "",
    price: "",
    room: "",
  };

  if (!values.location) {
    errors.location = "Required";
  }

  return errors;
};

export const CategoryContent = () => {
  const { isLoading, isError, data } = useQuery(
    "CATEGORIES",
    async () => await getCategories()
  );

  const dispatch = useDispatch<any>();

  const formik = useFormik({
    initialValues: {
      age: "",
      gender: "",
      duration: "",
      layout: "",
      inthehome: "",
      location: "",
      price: "",
      room: "",
    },
    validate,
    onSubmit: (values) => {
      dispatch(setCategoryFilter(values));
      console.log(values);
    },
  });

  if (isError) {
    return <ErrorBoundary />;
  }
  if (isLoading) {
    return <Loader />;
  }

  return <CategoryBar data={data} formik={formik} />;
};
