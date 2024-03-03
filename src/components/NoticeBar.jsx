
import WarningIcon from '@mui/icons-material/Warning';
import React from 'react';
import { Box, Typography } from '@mui/material';


const NoticeBar = () => {
    return (
        <div>
            <Box sx={{height:70, backgroundColor:"#9B1FE9",display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Typography variant='h6' component={'h3'} sx={{color:'#fff',}}>Notice Here</Typography>
            </Box>
            
        </div>
    );
};

export default NoticeBar;