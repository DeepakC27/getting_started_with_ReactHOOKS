import React, { useState, useEffect } from 'react'
import { Input, Button } from '../commonComponents'
import { InputChange } from './customHooks'
import regexCheck from './regex'
import './index.scss'

const SignIn = (props) => {
  const userEmail = InputChange('')
  const userPassword = InputChange('')
  const [btnStatus, setBtnStatus] = useState(false)

  useEffect(() => {
    let status = (regexCheck('validation', 'emailId', userEmail.value) &&
      userPassword.value.length >= 10)
    setBtnStatus(status)
  }, [userEmail.value, userPassword.value])

  const btnHandler = (event) => {
    event.preventDefault()
    alert('loggged in')
  }

  return (
    <React.Fragment>
      <div className='signUp-form-heading'>Enter your personal details to get started</div>
      <form onSubmit={(e) => { btnStatus && btnHandler(e) }} autoComplete='off'>
        <Input type='text' placeholder='Email address' name='email'
          {...userEmail}
        />
        <Input type='password' placeholder='Password (min-10 max-20 characters)' name='password'
          {...userPassword}
        />
      <Button className='mt20 mb20' onClick={btnHandler} disabled={!btnStatus}>
          Continue
        </Button>
      </form>
    </React.Fragment>
  )
}

export default SignIn
