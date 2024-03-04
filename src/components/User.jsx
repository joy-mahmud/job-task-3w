
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Card, Stack, Typography, buttonBaseClasses } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const User = () => {
    const [show, setShow] = useState(false)
    const {userdata,logout} =useContext(AuthContext)
    return (
        <div>
            <div style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: "#DDDDDD", position: "relative" }}></div>
            <AccountCircleOutlinedIcon onClick={() => setShow(!show)} sx={{ fontSize: '34px', position: "absolute", right: 35, top: 19, '&:hover': { cursor: 'pointer' }, }}></AccountCircleOutlinedIcon>

            {show &&
                <Card onClick={() => setShow(!show)} sx={{ position: "absolute", padding: 2, width: "120px", right: 35, top: 60 }}>
                    {userdata&&<p>{userdata.displayName}</p>}
                    <Stack direction={"column"}>
                        <Link to={'/signin'} style={{ textDecoration: 'none',color:'black' }}><Typography variant='subtitle1'>Login</Typography></Link>
                       <Link to={'/signup'} style={{ textDecoration: 'none',color:'black' }}> <Typography variant='subtitle1'>SignUp</Typography></Link>
                       {userdata && <Typography sx={{'&:hover': { cursor: 'pointer' }}} onClick={logout}  variant='subtitle1'>LogOut</Typography> } 
                    </Stack>
                </Card>
            }
        </div>
    );
};

export default User;