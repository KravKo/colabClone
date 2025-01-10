import React from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

export default function LogIn() {
  const [isSignUp, setIsSignUp] = React.useState(false);
  const handelToggle = () => {
    setIsSignUp(!isSignUp);
  }

  return (

    <div>
      {isSignUp ? <SignUp /> : <SignIn />}
    </div>
  )
}

