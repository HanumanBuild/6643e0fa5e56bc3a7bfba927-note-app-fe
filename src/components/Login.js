import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post('/api/auth/login', { username, password });
      console.log('Login successful:', response.data);
      // Handle login success (e.g., redirect, store token)
    } catch (error) {
      console.error('Login failed:', error.response.data);
      // Handle login error (e.g., show error message)
    }
  };

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-xl font-bold'>Login</h1>
      <form onSubmit={handleLogin}>
        <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} className='input input-bordered w-full max-w-xs' />
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='input input-bordered w-full max-w-xs' />
        <button type='submit' className='btn btn-primary'>Login</button>
      </form>
      <Link to='/signup'>Don't have an account? Sign up</Link>
    </div>
  );
}

export default Login;