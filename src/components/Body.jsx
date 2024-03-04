import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import React from 'react';

const Body = () => {
    return (
        <Box style={{ padding: "15px 30px", backgroundColor: "#EEF2FE" }}>
            <Typography variant='h4' component={'h4'} mt={4} sx={{ color: "#9B1FE9" }}>Request TestNet LINK</Typography>
            <Typography variant='subtitle1' width={"50%"} mb={6}>Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract</Typography>
            <Box bgcolor={"#fff"} padding={2}>
                <Box bgcolor={"#EEF2FE"} borderRadius={"5px"} padding={1}>
                    <Stack direction={"row"} spacing={1}>
                        <WarningIcon sx={{ color: "#9B1FE9" }} ></WarningIcon> <Typography variant='subtile2'>Your wallet is connected to Harmony Testnet, so you are requesting Harmony Testnet Link/ETH.</Typography>
                    </Stack>
                </Box>
                <Typography variant='subtitle1' color={"#9B1FE9"} fontWeight={"bold"} mt={1}>wallet address</Typography>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '50%' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        label="Enter your wallet address"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                        color="secondary"
                    />
                </Box>
                <Typography variant='subtitle1' color={"#9B1FE9"} fontWeight={"bold"} mt={1}>Request Type</Typography>
                <Stack direction={'row'} spacing={1} width={"50.5%"} mb={2}>
                    <Box padding={1} bgcolor={'#FAFAFA'} borderRadius={'5px'} border={1} flex={'1'} maxWidth={"50%"} borderColor={'#A8A8A8'}>
                        <Typography variant='subtitle2'>20 Test Link</Typography>
                    </Box>
                    <Box padding={1} bgcolor={'#FAFAFA'} borderRadius={'5px'} border={1} flex={'1'} borderColor={'#A8A8A8'}>
                        <Typography variant='subtitle2'>0.5 ETH</Typography>
                    </Box>
                </Stack>
                <Button variant="contained" size='small' color="secondary">Send Request</Button> 
                <Box mt={4}>
                    <Typography variant='subtitle2' fontWeight={'bold'}>Request History</Typography>
                </Box>          
                       
            </Box>
        </Box>
    );
};

export default Body;