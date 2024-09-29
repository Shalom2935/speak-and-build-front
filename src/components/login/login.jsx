import React, { useState } from 'react';
import { TextField, Button, Container, Paper, Typography } from '@mui/material';
import './Login.scss';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await fetch('/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      const token = data.token;
      console.log('Token:', token);
  };

  return (
    <Container className='login'>
      <Paper className='container' elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h1">Log into your account</Typography>
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
        <Button variant="outlined" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </Paper>
    </Container>
  );
};

export default Login;
