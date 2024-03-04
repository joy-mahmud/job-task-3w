import { Box, Button, Input, Stack, Typography } from '@mui/material';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
const ariaLabel = { 'aria-label': 'description' };
const SignUp = () => {
    const navigate = useNavigate()
   const {loading,setLoading,setUserdata}=useContext(AuthContext)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleName = (event) => {
        setName(event.target.value);
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
    //login with google
    const loginwithgoogle = () => {
        window.open("http://localhost:5000/auth/google/callback", "_self")
    }
    //sign up
    const handleSignup = (e) => {
        e.preventDefault()

        console.log(name, email, password)
        const userInfo = {
            email,
            password,
            googleId:"",
            displayName:name,
            image:"",
            role:'user'
        }
        console.log(userInfo)
        axios.post('http://localhost:5000/users', userInfo)
            .then(res => {
                if (res.data) {
                    console.log(res.data.token)
                    if (res.data) {
                        localStorage.setItem('access-token', res.data.token)
                        setLoading(false)
                    }
                    setUserdata(userInfo)

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "You registered successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/')
                }
            })
    }
    return (
        <div>
            <Box bgcolor={'#EEF2FE'} paddingY={4} display={'flex'} justifyContent={'center'}>
                <Box paddingY={3} paddingX={2} bgcolor={'white'} width={'420px'}>
                    <Typography variant='h5' component={'h5'} textAlign={'center'} fontWeight={'bold'}>Sign up</Typography>
                    <form onSubmit={handleSignup}>

                        <Box>
                            <Typography variant='subtitle2' fontWeight={'bold'} color={"black"}>Name</Typography>
                            <Input type='text' onChange={handleName} color="secondary" fullWidth placeholder="Enter your name" inputProps={ariaLabel} />
                        </Box>
                        <Box>
                            <Typography variant='subtitle2' fontWeight={'bold'} color={"#000"} mt={2}>Email</Typography>
                            <Input onChange={handleEmail} color="secondary" fullWidth placeholder="Enter your email" inputProps={ariaLabel} />
                        </Box>
                        <Box mb={2}>
                            <Typography variant='subtitle2' fontWeight={'bold'} color={"#000"} mt={2}>Password</Typography>
                            <Input onChange={handlePassword} type="password" color="secondary" fullWidth placeholder="Enter your password" inputProps={ariaLabel} />
                        </Box>
                        <Button mt={2} type='submit' variant="contained" color="secondary" fullWidth >
                            Sign up
                        </Button>

                    </form>
                    <Stack direction={'column'} mt={1} spacing={2} alignItems={'center'}>
                        <Typography variant='subtitle2' fontWeight={'bold'}>Already have an account? <Link to={'/signin'}>SignIn</Link></Typography>
                        <Typography variant='subtitle2' fontWeight={'bold'}>Or</Typography>
                        <Button onClick={loginwithgoogle} variant='contained' color='secondary'>signIn with google</Button>
                    </Stack>
                </Box>

            </Box>
        </div>
    );
};

export default SignUp;