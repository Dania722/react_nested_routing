import React from "react";
import { Typography , Grid } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Profile from "../pages/profile.js"

const style = {marginLeft:"35px"}
function Messages() {
    return (
        <>
        {/* <Typography variant="h3" align="center">Messages</Typography> */}
                {/* <Typography variant="h1" align="center">Accounting</Typography> */}
                <Grid container direction="row" alignItems="center">
  {/* <Grid >
<Typography variant='h6'> Dashboard</Typography>
  </Grid> */}
  <Grid container direction="row" alignItems="center">
  <Grid >
  <AccountCircleIcon fontSize='large' /> 
  </Grid>
  <Grid>
    <Profile/>
  </Grid>
  <Grid container direction="row" alignItems="center">
    <Grid>
    <Typography style={style}>
      Check your activites in your dashboard 
    </Typography>
    </Grid>
  </Grid>
</Grid>
</Grid>
        </>
    )
  }
  export default Messages;