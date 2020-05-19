import React, { useState, useEffect } from 'react'
import { Input, Button } from '../commonComponents'
import { InputChange } from './customHooks'
import regexCheck from './regex'
import './index.scss'

const SignUp = (props) => {
  const firstName = InputChange('')
  const lastName = InputChange('')
  const email = InputChange('')
  const mobileNo = InputChange('')
  const password = InputChange('')
  const [btnStatus, setBtnStatus] = useState(false)


  useEffect(() => {
    let status = (regexCheck('validation', 'userName', firstName.value) &&
      regexCheck('validation', 'userName', lastName.value) &&
      regexCheck('validation', 'emailId', email.value) &&
      regexCheck('validation', 'numeric', mobileNo.value) &&
      password.value.length >= 10)
    setBtnStatus(status)
  }, [firstName, lastName, email, mobileNo, password])

  const submitNewUserForm = () => {
    alert('Successfully signed up')
  }

  return (
    <React.Fragment>
      <div className='signUp-form-heading'>Lets create your profile</div>
      <form onSubmit={(e) => { btnStatus && submitNewUserForm(e) }} autoComplete='off'>
        <div className='displayFlex'>
          <Input type='text' placeholder='Name' className='mr20' name='firstName'
            {...firstName}
            />
          <Input type='text' placeholder='Last Name' name='lastName'
            {...lastName}
            />
        </div>
        <Input type='text' placeholder='Email address' name='email'
          {...email}
          />
        <Input type='text' placeholder='Mobile no' name='mobileno'
          {...mobileNo}
          />
        <Input type='password' placeholder='Password (min-10 max-20 characters)' name='password'
          {...password}
          />
      </form>
      <Button className='mt20 mb20' onClick={() => submitNewUserForm()} disabled={!btnStatus}>
        Continue
      </Button>
    </React.Fragment>
  )
}

export default SignUp
