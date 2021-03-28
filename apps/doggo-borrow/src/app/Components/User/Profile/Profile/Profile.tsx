// List all profiles with information such as
// Name, Location, Owner / Borrower, Dogs name, Bio, profile pic etc..
// Could even make a verified_users view which shows only users that exist in the profiles list.
// If users dont exist there potentially they cannot message yet. Can always have a 2 step verification
// process eventually too.

import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROFILE_BY_ID } from "../../../../GraphQL/queries";
import { useAuth0 } from "apps/doggo-borrow/src/app/Auth/react-auth0-spa";
import profileHelpers from "apps/doggo-borrow/src/utils/helpers/profile_helpers";

const Profile = () => {
  const { user } = useAuth0();
  const history = useHistory();
  const { loading: profileLoading, error, data } = useQuery(GET_PROFILE_BY_ID, {
    variables: { user_id: user.sub },
  });

  console.log(data);

  return (
    <Container>
      <Typography>Profile</Typography>
      {profileLoading ? (
        <CircularProgress />
      ) : data?.profiles?.length ? (
        Object.entries(data.profiles[0]).map(([key, value]) => (
          <Typography>
            {key}: {value}
          </Typography>
        ))
      ) : (
        <Typography>No profile information to display</Typography>
      )}
      {!profileLoading &&
      data?.profiles?.[0] &&
      profileHelpers.isOwner(data?.profiles?.[0].type) ? (
        <>
          <Typography>Dog</Typography>
          {data?.dogs?.length ? (
            Object.entries(data.dogs[0]).map(([key, value]) => (
              <Typography>
                {key}: {value}
              </Typography>
            ))
          ) : (
            <Typography>No dogs to display</Typography>
          )}
        </>
      ) : null}
      <Button onClick={() => history.push("/profile/edit")}>
        Edit Profile
      </Button>
    </Container>
  );
};

export default Profile;
