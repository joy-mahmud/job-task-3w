import { Box, Button, Card, Typography } from '@mui/material';
import React, { useState } from 'react';
import arbitrum from '../assets/arbitrum.png'
import avalanche from '../assets/avalanche-avax-logo.svg'
import bnbTestnet from '../assets/bnbTestnet.png'
import ethereum from '../assets/ethereum3649.jpg'
import fantom from '../assets/fantom-ftm-logo.png'
import polygon from '../assets/polygon mumbai.jpeg'
import harmony from '../assets/harmonyTest.jpeg'
import { KeyboardArrowDown } from '@mui/icons-material';
const NavDropDownButton = () => {
    const [dropdown, setDropdown] = useState({ name: "Arbitrum-Rinkeby", logo: arbitrum })
    const [show, setShow] = useState(false)
    const cryptoInfo = [
        { name: "Arbitrum-Rinkeby", logo: arbitrum },
        { name: "Avalnchi Fuji", logo: avalanche },
        { name: "Fantom Testnet", logo: fantom },
        { name: "BNB chain Testnet", logo: bnbTestnet },
        { name: "Ethereum Rinkeby", logo: ethereum },
        { name: "Polygon Mumbai", logo: polygon },
        { name: "Harmony Testnet", logo: harmony }
    ]
    const handleDropdown = (item) => {
        setDropdown(item)
        setShow(!show)
    }
    return (
        <div style={{position:"relative"}}>
            <Box onClick={() => setShow(!show)} sx={{ '&:hover': { cursor: 'pointer' }, display:'flex',alignItems:'center', border: 1, height: 38, paddingX: 1, borderRadius: "5px", borderColor: '#DDDDDD' }} >
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <img style={{ height: "25px", width: "25px" }} src={dropdown.logo} alt="" />
                    <Typography variant="subtitle2">{dropdown.name}</Typography>
                    <KeyboardArrowDown></KeyboardArrowDown>
                </Box>
            </Box>

            {show && <Card sx={{ padding: 2, position:"absolute", top:"50px", right:0 ,width:"230px" }}>
                {
                    cryptoInfo.map((item, idx) => <Box onClick={() => handleDropdown(item)} key={idx} sx={{ display: "flex", gap: 1, alignItems: 'center', justifyItems: 'center', '&:hover':{backgroundColor:"#F3F3FB",borderRadius:"4px"},padding:1 }}>
                        <img style={{ height: '25px', width: '25px' }} src={item.logo} alt="" />
                        <Typography variant="subtitle2">{item.name}</Typography>

                    </Box>)
                }

            </Card>}

        </div>
    );
};

export default NavDropDownButton;