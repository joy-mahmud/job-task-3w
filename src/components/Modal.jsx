import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Height, Wallet } from '@mui/icons-material';
import ClearIcon from '@mui/icons-material/Clear'
import Stack from '@mui/material/Stack';
import { Card } from '@mui/material';
import walletConnect from '../assets/WalletConnect-icon.png'
import metaMask from '../assets/metamask-icon-png.png'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    borderRadius: "5px",
    boxShadow: 24,
    p: 3,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} variant="outlined" startIcon={<Wallet />} href="#" size="small" sx={{ border: 2, '&:hover': { border: 2, borderColor: '#9B1FE9 ', backgroundColor: "fff" }, borderColor: '#9B1FE9 ', textTransform: 'lowercase', fontSize: '16px', color: "#9B1FE9", fontWeight: "bold" }}>
                connect Wallet
            </Button>
            <Modal
                open={open}
                onClose={handleClose}

            >
                <Box sx={style}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
                        <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ fontWeight: "bold" }}>
                            Connect your wallet
                        </Typography>
                        <ClearIcon onClick={handleClose} sx={{'&:hover':{cursor:"pointer"}}}></ClearIcon>
                    </Box>
                    <Box sx={{ display: 'flex',gap:3,marginTop:5  }}>

                        <Card sx={{ height:170,width:240,display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',backgroundColor:"#F5F7FD",gap:3 }}>
                            <img style={{ height: 80, width: 80 }} src={metaMask} alt="" />
                            <Typography variant='h5' component={'h2'} sx={{fontWeight:'bold',color:"#9B1FE9"}}>MetaMask</Typography>
                        </Card>
                        <Card sx={{ height:170,width:240, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',backgroundColor:"#F5F7FD", gap:3 }}>
                            <img style={{ height: 80, width: 110, }} src={walletConnect} alt="" />
                            <Typography variant='h5' component={"h2"} sx={{fontWeight:'bold',color:"#9B1FE9"}}>Wallet Connect</Typography>
                        </Card>

                    </Box>

                </Box>

            </Modal>
        </div>
    );
}