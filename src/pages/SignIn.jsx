import React, { useContext, useState } from 'react';
import { Box, Button, Input, Stack, Typography } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
const ariaLabel = { 'aria-label': 'description' };

const SignIn = () => {
    const { userdata,setUserdata,setLoading } = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
    const loginwithgoogle = ()=>{
        window.open("http://localhost:5000/auth/google/callback","_self")
    }
    const handleSignIn = (e)=>{
        e.preventDefault()
        console.log(email,password)
        const authInfo = { email, password }
        axios.post('http://localhost:5000/login', authInfo)
        .then(res => {
            console.log(res.data._doc)
            if (res.data.authorization === 'ok') {

               if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                            
                            setLoading(false)
                            setUserdata(res.data._doc)
                            navigate(from, { replace: true })
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "You logged in successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
            
            }
           
        })
    }

    return (
        <div>
            <Box bgcolor={'#EEF2FE'} paddingY={4} display={'flex'} justifyContent={'center'}>
                <Box paddingY={3} paddingX={2} bgcolor={'white'} width={'420px'}>
                    <Typography variant='h5' component={'h5'} textAlign={'center'} fontWeight={'bold'}>Login</Typography>
                    <form onSubmit={handleSignIn}>
                    
                        <Box>
                            <Typography variant='subtitle2' fontWeight={'bold'} color={"#000"} mt={2}>Email</Typography>
                            <Input onChange={handleEmail} color="secondary" fullWidth placeholder="Enter your email" inputProps={ariaLabel} />
                        </Box>
                        <Box mb={2}>
                            <Typography  variant='subtitle2' fontWeight={'bold'} color={"#000"} mt={2}>Password</Typography>
                            <Input onChange={handlePassword} type="password" color="secondary" fullWidth placeholder="Enter your password" inputProps={ariaLabel} />
                        </Box>
                        <Button mt={2} type='submit' variant="contained" color="secondary" fullWidth >
                            Login
                        </Button>

                    </form>
                    <Stack direction={'column'} spacing={2} mt={1} alignItems={'center'}>
                        <Typography variant='subtitle2' fontWeight={'bold'}>don't have an account? <Link to={'/signup'}>Sign up</Link></Typography>
                        <Typography variant='subtitle2' fontWeight={'bold'}>Or</Typography>
                        <Button onClick={loginwithgoogle} variant='contained' color='secondary'>signIn with google</Button>
                    </Stack>
                </Box>

            </Box>
        </div>
    );
};

export default SignIn;