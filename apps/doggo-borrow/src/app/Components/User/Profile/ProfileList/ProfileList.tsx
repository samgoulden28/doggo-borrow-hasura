// List all profiles with information such as
// Name, Location, Owner / Borrower, Dogs name, Bio, profile pic etc..
// Could even make a verified_users view which shows only users that exist in the profiles list.
// If users dont exist there potentially they cannot message yet. Can always have a 2 step verification
// process eventually too.

import React from "react";
import { Typography, Container, CircularProgress } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { GET_PROFILES } from "../../../../GraphQL/queries";

const ProfileList = () => {
  const { loading: profileListLoading, error, data } = useQuery(GET_PROFILES);

  return (
    <Container>
      <Typography>Here is a list of all the profiles!</Typography>
      {profileListLoading ? (
        <CircularProgress />
      ) : data?.profiles && data?.profiles?.length ? (
        data.users.map((user) => user.name)
      ) : (
        <Typography>No profiles to display</Typography>
      )}
    </Container>
  );
};

export default ProfileList;
