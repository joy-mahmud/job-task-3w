import { Copyright } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} padding={3}>
                <Copyright fontSize='25px'></Copyright>
                <Typography variant='caption'>copyright-2024-all righits reserved by Faucet</Typography>
            </Stack>


        </div>
    );
};

export default Footer;