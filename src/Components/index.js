import React, { useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import './index.scss'


const Login = () => {
  const [isSignIn, setPageState] = useState(true)

  return (
    <div className='login-form-container'>
      <div className='login-headings row'>
        <div className={'col-6 section-heading ' + (isSignIn ? 'active' : '')}
          onClick={() => setPageState(true)}>
          Sign In <div />
        </div>
        <div className={'col-6 section-heading ' + (isSignIn ? '' : 'active')}
          onClick={() => setPageState(false)}>
          Sign Up <div />
        </div>
      </div>
      <div className={'login-form-fields ' + (isSignIn ? 'signIn-wrapper' : 'signUp-wraper') }>
        {isSignIn
          ? <SignIn />
        : <SignUp />
        }
      </div>
    </div>
  )
}

export default Login
