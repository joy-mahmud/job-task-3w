
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Card, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

const User = () => {
    const [show, setShow] = useState(false)
    
    return (
        <div>
            <div style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: "#DDDDDD", position: "relative" }}></div>
            <AccountCircleOutlinedIcon onClick={() => setShow(!show)} sx={{ fontSize: '34px', position: "absolute", right: 35, top: 19, '&:hover': { cursor: 'pointer' }, }}></AccountCircleOutlinedIcon>

            {show &&
                <Card onClick={() => setShow(!show)} sx={{ position: "absolute", padding: 2, width: "120px", right: 35, top: 60 }}>
                    <Stack direction={"column"}>
                        <Typography variant='subtitle1'>Login</Typography>
                        <Typography variant='subtitle1'>SignUp</Typography>
                        <Typography variant='subtitle1'>LogOut</Typography>
                    </Stack>
                </Card>
            }
        </div>
    );
};

export default User;