import React, { useState } from 'react';
import { TextField, Button, Container, Paper, Typography } from '@mui/material';
import './Signup.scss';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    // Logique pour créer un compte
    console.log('Sign Up:', { email, password });
  };

  return (
    <Container className='signup'>
      <Paper className='container' elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h1">Create account</Typography>
        <TextField
          className='textfield'
          variant="outlined"
          label="email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size='small'
        />
        <TextField
          className='textfield'
          variant="outlined"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          size='small'
        />
        <Button variant="outlined" color="primary" onClick={handleSignUp}>
          Register
        </Button>
      </Paper>
    </Container>
  );
};

export default SignUp;
