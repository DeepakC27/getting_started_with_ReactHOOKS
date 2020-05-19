import { useState } from 'react'
import regexCheck from './regex'

export const InputChange = (initalValue) => {
  const [value, setValue] = useState(initalValue)

  const onChange = (e) => {
    let field = RegexFieldsMapping[e.target.name]
    regexCheck('onChange', field.type, e.target.value, field.length) &&
    setValue(e.target.value)
  }

  return {
    value,
    onChange
  }
}


const RegexFieldsMapping = {
  email: { type: 'emailId', length: 40 },
  password: { type: 'plainTxt', length: 20 },
  firstName: { type: 'userName', length: 40 },
  lastName: { type: 'userName', length: 40 },
  mobileno: { type: 'numeric', length: 10 }
}
