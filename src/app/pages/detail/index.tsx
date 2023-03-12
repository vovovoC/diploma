import { useEffect, useMemo, useState } from "react";
import { useFormik } from "formik";
import { createTheme } from "@mui/material/styles";
import { duration } from "../../../shared/filter";
import { city } from "../../../shared/filter";
import { gender } from "../../../shared/filter";
import { amenities } from "../../../shared/filter";
import { housingCategory } from "../../../shared/filter";
import SelectInput from "../../components/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Post } from "../../components/Post";
import Layout from "../../components/Layout";
import "./index.scss";
import { getCategories } from "../../utils/api/request";

interface Value {
  city: string;
  firstName: string;
  lastName: string;
}

const validate = (values: Value) => {
  const errors: Value = {
    city: "",
    firstName: "",
    lastName: "",
  };

  if (!values.city) {
    errors.city = "Required";
  }

  if (!values.firstName) {
    errors.firstName = "Required";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  }

  return errors;
};

const DetailPage = () => {
  const theme = createTheme();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      city: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Layout theme={theme}>
      <div>detail pages</div>
    </Layout>
  );
};

export default DetailPage;
