import React from 'react';
import {useState} from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

export default function LogIn() {
  const [isSignUp, setIsSignUp] = React.useState(true);
  const handelToggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className=''>
      {isSignUp ? (
        <SignUp handelToggle={handelToggle} />
      ) : (
        <SignIn handelToggle={handelToggle} />
      )}
    </div>
  );
}
