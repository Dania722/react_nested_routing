

import { Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";

function Profile() {
  const params = useParams();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Typography>Hello, {params.id}{location.state.name}</Typography>
   
    </>
  );
}

export default Profile;
