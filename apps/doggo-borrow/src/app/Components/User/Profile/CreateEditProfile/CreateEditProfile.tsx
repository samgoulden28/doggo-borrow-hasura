// Create a profile with information such as:
// Name, Location, Owner / Borrower, Dogs name, Bio, profile pic etc..
// Could even make a verified_users view which shows only users that exist in the profiles list.
// If users dont exist there potentially they cannot message yet. Can always have a 2 step verification
// process eventually too.

import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";

import TextField from "@material-ui/core/TextField";
import formInitialValues from "./formInitialValues";
import { TextareaAutosize } from "@material-ui/core";

//When user logs in, we should probably grab their profile and chuck it away in a store of some sort.
//If there is no profile, we should create one and redirect them to the profile edit page.

const validationSchema = yup.object({
  postcode: yup
    .string()
    .matches(
      /^[ABCEGHJ-NPRSTVXYabceghj-nprstvxy]\d[ABCEGHJ-NPRSTV-Zabceghj-nprstv-z][ -]?\d[ABCEGHJ-NPRSTV-Zabceghj-nprstv-z]\d$/,
      "Invalid postcode"
    )
    .required("postcode is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const CreateEditProfile = () => {
  const handleSubmit = () => {
    console.log("submit!");
  };
  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnBlur
    >
      {({ values, touched, errors, handleSubmit, handleChange }) => {
        console.log(values, errors);
        return (
          <Form onSubmit={handleSubmit}>
            <TextareaAutosize
              id="bio"
              name="bio"
              value={values.bio}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              id="postcode"
              name="postcode"
              label="postcode"
              value={values.postcode}
              onChange={handleChange}
              error={touched.postcode && Boolean(errors.postcode)}
              helperText={touched.postcode && errors.postcode}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateEditProfile;
