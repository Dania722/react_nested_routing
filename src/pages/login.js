import React  from   "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import  {Avatar}  from "@mui/material";
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "@mui/material";
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";





const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  
const Login = (props) => {
    const paperstyle ={Padding:20 , width:'500px' ,margin:"25px auto" }
    const avatrastyle={backgroundColor :'green' , bottom:'20px' }
    const heading = {fontweight:'bold' , margin:"-10px 0 0 0 " }
    const btnstyle={margin:'8px 0' , Padding:'100px', top:10 , }
    const txt = { bottom:'15px'  }
    const check = { margin:"auto 80px" }
    const signin = {margin:"15px 10px 0 0 " }
    const forgot = {margin:"-35px 0px  10px 195px  " }

    const [name, setName] = useState("");  
    const navigate = useNavigate();
  
    const Signin = () => {
      let obj = {
        name
      };
      console.log(obj);
      navigate(`/dashboard/${name}`, { state: obj });
    };


    return (



          <Grid>
<Paper  align = 'center' elevation={10} style={paperstyle}>
    <Grid align = 'center'>
    <Avatar sx={{ width: 66, height: 66 }}  style={avatrastyle} >  <ManageAccountsOutlinedIcon/> </Avatar>
   <h2 style={heading}>Sign In</h2>
    </Grid  >
    <TextField 
    sx={{ width: '32ch' }} 
     label='Username'
      placeholder='username *'
       id="standard-basic
       " variant="standard"
       style={txt} 
       required={true}
       value = {name}
       onChange={(e)=> setName(e.target.value)}  />
      <TextField sx={{ width: '32ch' }}
        label='Password'
         placeholder='password *' 
         type='password'
          id="standard-basic"
           variant="standard" 
           required={true}

           />


                <div class="form-inline">
                   
<FormGroup style={check}>
<FormControlLabel 
 control={<Checkbox unChecked />} 
 label ="Remember me " />
</FormGroup>
<Typography   style={forgot} >
     <Link href="#" >
        Forgot password
</Link>
</Typography> 
  </div>

<Button  
sx={{ width: '32ch' }} 
 type='submit' 
 color='success' 
  variant="contained"
   style={btnstyle}
   onClick={Signin}> Sign in</Button>

<Typography  style={signin}> Do you have an account ?
     <Link href="/signup">
        Sign Up 
</Link>
</Typography>


</Paper>
</Grid>
    )
}
export default Login;

















