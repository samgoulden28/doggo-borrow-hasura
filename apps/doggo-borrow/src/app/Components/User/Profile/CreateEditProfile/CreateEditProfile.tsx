// Create a profile with information such as:
// Name, Location, Owner / Borrower, Dogs name, Bio, profile pic etc..
// Could even make a verified_users view which shows only users that exist in the profiles list.
// If users dont exist there potentially they cannot message yet. Can always have a 2 step verification
// process eventually too.

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useQuery } from "@apollo/client";
import TextField from "@material-ui/core/TextField";
import formInitialValues from "./formInitialValues";
import { TextareaAutosize, makeStyles, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Collapse from "@material-ui/core/Collapse";

import {
  GET_PROFILE_BY_ID,
  ADD_PROFILE,
  UPDATE_PROFILE,
  ADD_PROFILE_AND_ADD_DOG,
} from "apps/doggo-borrow/src/app/GraphQL/queries";
import { useMutation } from "@apollo/client";
import { useAuth0 } from "apps/doggo-borrow/src/app/Auth/react-auth0-spa";
import profileHelpers from "apps/doggo-borrow/src/utils/helpers/profile_helpers";
import DatePicker from "apps/doggo-borrow/src/app/Components/FormComponents/DatePicker/DatePicker";

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
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  bio: yup.string().required("Required"),
});

const useStyles = makeStyles(() => ({
  fullWidth: {
    width: "100%",
    height: "80px",
  },
}));

const CreateEditProfile = () => {
  const { user } = useAuth0();
  const { loading: profileLoading, error, data } = useQuery(GET_PROFILE_BY_ID, {
    variables: { user_id: user.sub },
  });
  const classes = useStyles();
  const history = useHistory();

  const [initialValues, setInitialValues] = useState<Record<string, string>>(
    formInitialValues
  );

  useEffect(() => {
    console.log(profileLoading, data);
    if (!profileLoading && data?.profiles?.length) {
      const {
        name,
        bio,
        postcode,
        type,
      }: Record<string, string> = data?.profiles[0];
      setInitialValues({
        firstName: name.split(" ")[0],
        lastName: name.split(" ")[1],
        bio,
        postcode,
        type,
      });
    }
  }, [profileLoading, data]);
  const goHome = () => {
    history.push(`/profile`);
  };

  const updateCache = (cache, { data }) => {
    cache.writeQuery({
      query: GET_PROFILE_BY_ID,
      variables: { user_id: user.sub },
      data: { profiles: [data] },
    });
  };

  const [addProfile] = useMutation(ADD_PROFILE, {
    update: updateCache,
    onCompleted: goHome,
  });

  const [addProfileAndDogs] = useMutation(ADD_PROFILE_AND_ADD_DOG, {
    update: updateCache,
    onCompleted: goHome,
  });

  const [updateProfile] = useMutation(UPDATE_PROFILE, {
    update: updateCache,
    onCompleted: goHome,
  });

  const handleSubmit = (values) => {
    const isOwner = profileHelpers.isOwner(values.type);
    let variables = {
      variables: {
        name: `${values.firstName} ${values.lastName}`,
        bio: values.bio,
        postcode: values.postcode,
        type: values.type,
        id: null,
        user_id: null,
        dogBio: isOwner ? values.dogBio : null,
        dogBirthday: isOwner ? values.dogBirthday : null,
        dogBreed: isOwner ? values.dogBreed : null,
        dogName: isOwner ? values.dogName : null,
      },
    };

    if (data?.profiles?.length) {
      variables.variables.id = data?.profiles?.[0]?.id;
      updateProfile(variables);
    } else {
      variables.variables.user_id = user.sub;
      console.log(variables);
      if (isOwner) {
        addProfileAndDogs(variables);
      } else {
        addProfile(variables);
      }
    }
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnBlur
    >
      {({ values, touched, errors, handleSubmit, handleChange }) => {
        console.log(values, errors);
        return (
          <Form onSubmit={handleSubmit}>
            <TextField
              id="firstName"
              name="firstName"
              label="firstName"
              value={values.firstName}
              onChange={handleChange}
              error={touched.firstName && Boolean(errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />
            <TextField
              id="lastName"
              name="lastName"
              label="lastName"
              value={values.lastName}
              onChange={handleChange}
              error={touched.lastName && Boolean(errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
            <TextareaAutosize
              id="bio"
              name="bio"
              value={values.bio}
              onChange={handleChange}
              className={classes.fullWidth}
              style={{ height: "80px" }}
            />
            {touched.bio && Boolean(errors.bio) && (
              <Typography style={{ color: "red", fontSize: "0.75rem" }}>
                {errors.bio}
              </Typography>
            )}
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
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="type"
                name="type"
                onChange={handleChange}
                value={values.type}
              >
                <FormControlLabel
                  value="borrower"
                  control={<Radio />}
                  label="Borrower"
                />
                <FormControlLabel
                  value="owner"
                  control={<Radio />}
                  label="Owner"
                />
              </RadioGroup>
            </FormControl>
            <Collapse in={values.type === "owner"}>
              <TextField
                id="dogName"
                name="dogName"
                label="dogName"
                value={values.dogName}
                onChange={handleChange}
                error={touched.dogName && Boolean(errors.dogName)}
                helperText={touched.dogName && errors.dogName}
              />

              <TextField
                id="dogBreed"
                name="dogBreed"
                label="dogBreed"
                value={values.dogBreed}
                onChange={handleChange}
                error={touched.dogBreed && Boolean(errors.dogBreed)}
                helperText={touched.dogBreed && errors.dogBreed}
              />
              <TextareaAutosize
                id="dogBio"
                name="dogBio"
                value={values.dogBio}
                onChange={handleChange}
                className={classes.fullWidth}
                style={{ height: "80px" }}
              />
              <DatePicker name="dogBirthday" />
            </Collapse>
            <Button type="submit">Submit</Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateEditProfile;
