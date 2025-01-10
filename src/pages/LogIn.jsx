import React from 'react';
import {useState} from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

export default function LogIn() {
  const [isSignUp, setIsSignUp] = React.useState(true);
  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  }

  return (

    <div>
      {isSignUp ? <SignUp /> : <SignIn />}
    </div>
  )
}

