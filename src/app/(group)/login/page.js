'use client';
import React, { useState, useEffect } from 'react';
import { signIn } from 'next-auth/react';

const LoginPage = () => {
  const [username, setUsername] = useState('653004');
  const [password, setPassword] = useState('b@mb');
  //js
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(username, password);
    try {
      //code
      const result = await signIn('credentials', {
        redirect: false,
        username,
        password,
      });
      console.log(result);
    } catch (err) {
      //err
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name='username'
          placeholder='Username'
          type='text'
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name='password'
          placeholder='Password'
          type='password'
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default LoginPage;
