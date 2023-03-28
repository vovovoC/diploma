import "./index.scss";
import user from "../../../../app/assets/images/user.png";
import { useFormik } from "formik";
import { useState } from "react";
import { Input, FormHelperText } from '@mui/material';

interface Props {
  data: any;
}
interface Value {
  img: string | null;
  name: string | null;
  email: string | null;
  phone: string | null;
  birthday: string | null;
  gender: string | null;
  bio: string | null;
}

const validate = (values: Value) => {
  const errors: any = {};
  return errors;
};

export const UserInfo = ({ data }: Props) => {
  const [edit, setEdit] = useState(false);
  const formik = useFormik({
    initialValues: {
      img: null,
      name: null,
      email: null,
      phone: null,
      birthday: null,
      gender: null,
      bio: null,
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  

  return (
    <div className="user-info">
      <div className={ edit ? "hide" : "user-data"}>
        <img src={user} alt="" className="user-img"/>
        <div className="user-text">
          <p className="user-name">Madina Lastname, 24 y.o</p>
          <p className="user-job">Landlord/company/specialist</p>
          <p className="user-phone">+7 707 855 2200</p>
        </div>
        <button onClick={() => setEdit(true)}>Edit profile</button>
      </div>
      <div className={ edit ? "user-update" : "hide"}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
            <img src={user} alt="" className="user-img"/>
            <div>
               <label htmlFor="name">Full Name</label>
                <Input id="name" aria-describedby="name-helper-text" 
                  required
                  fullWidth
                  name="name"
                  autoFocus
                  error={!!formik.errors.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                <FormHelperText id="name-helper-text">{formik.errors.name}</FormHelperText>
            </div>
            <div>
              <label htmlFor="email">Email address</label>
              <Input id="email" aria-describedby="email-helper-text" 
                required
                fullWidth
                name="email"
                autoComplete="email"
                error={!!formik.errors.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            <FormHelperText id="email-helper-text">{formik.errors.email}</FormHelperText>
            </div>
            <div>
               <label htmlFor="phone-input">Phone Number</label>
                <Input id="phone-input" aria-describedby="phone-helper-text" 
                  required
                  fullWidth
                  name="phone"
                  autoComplete="phone"
                  error={!!formik.errors.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                <FormHelperText id="phone-helper-text">{formik.errors.phone}</FormHelperText>
            </div>
            <div className="btns">
              <button type="submit" className="save">Save</button>
              <button className="cancel" onClick={() => setEdit(false)}>Cancel</button>
            </div>
        </form>
      </div>
    </div>
    );
};
