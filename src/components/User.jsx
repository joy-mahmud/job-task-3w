
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import React from 'react';

const User = () => {
    return (
        <div>
            <div style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: "#DDDDDD", position: "relative" }}></div>
            <AccountCircleOutlinedIcon sx={{ fontSize: '34px', position: "absolute", right: 35, top: 19, '&:hover': { cursor: 'pointer' }, }}></AccountCircleOutlinedIcon>
        </div>
    );
};

export default User;