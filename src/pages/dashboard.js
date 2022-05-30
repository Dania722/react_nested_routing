// import { Typography , Box , Grid } from "@mui/material";
import React from "react";
// import Accounting from "../dashpages/accounting";
// import Analysis from "../dashpages/analysis";
// import Messages from "../dashpages/messages";
// import Profilee from "../dashpages/pro";
// import Project from "../dashpages/project";
// import { BrowserRouter as Router, Routes, Route , Link } from "react-router-dom";
import All from "../pages/all";
import ResponsiveDrawer from "../components/drawer";
// import Profile from "./profile";
function Dash ()
{
    return(
<>
{/* <div> <Typography> hhybj</Typography></div> */} {/* <Profile/> */}
      <All/>
      <ResponsiveDrawer/>
   

</>
    )
}
export default Dash;