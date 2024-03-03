import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import BasicModal from './Modal';
import NavDropDownButton from './NavDropDownButton';
import User from './User';

const Navbar = () => {
    return (
        <div>
            
            <Box sx={{ display: 'flex', paddingX: 4,paddingY:2, justifyContent: "space-between", alignItems: 'center' }}>
                <Typography variant='h5' component="h4" sx={{ color: "#9B1FE9",fontWeight:"bold" }}>Faucets</Typography>
                <Stack direction="row" spacing={2}>
                    <NavDropDownButton></NavDropDownButton>
                   {/* collect wallet button came from modeal component  */}
                    <BasicModal></BasicModal>
                   <User></User>
                </Stack>
            </Box>
        </div>
    );
};

export default Navbar;