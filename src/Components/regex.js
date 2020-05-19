const regexRegistory = {
  onChange: {
    numeric: (value, lengthCheck) => {
      const regex = /^[0-9]*$/
      if (lengthCheck) {
        return (regex.test(value) && value.length <= lengthCheck)
      } else {
        return (regex.test(value))
      }
    },
    userName: (value, length = 40) => {
      const regex = /^(([A-Za-z]+)([.\-', ]*))*$/
      return (regex.test(value) && value.length <= length)
    },
    emailId: (value, length = 40) => {
      const eRegex = /^[A-Za-z0-9@._-]*$/
      return (eRegex.test(value) && value.length <= length)
    },
    plainTxt: (value, allowLengthCheck = false, length = 200) => {
      const regex = /^[\w\d\s!@#$%&*(),.?':{}-]*$/
      if (allowLengthCheck) {
        return (regex.test(value) && value.length <= length)
      } else {
        return (regex.test(value))
      }
    },
    alphanumeric: (value, lengthCheck) => {
      const regex = /[\w\s]*$/
      if (lengthCheck) {
        return (regex.test(value) && value && value.replace(/\s/g, '').length <= lengthCheck)
      } else {
        return (regex.test(value))
      }
    }
  },
  validation: {
    numeric: (value, lengthRange = [10]) => {
      const regex = /^[0-9]*$/
      return value && (regex.test(value) && lengthRange.includes(value.length))
    },
    userName: (value, minLength = 2, maxLength = 40) => {
      value = value && value.trim()
      const nameRegex = /^(([A-Z'a-z]+)([.\-', ]*))*$/
      return value && (nameRegex.test(value) && value.length >= minLength && value.length <= maxLength)
    },
    emailId: (value) => {
      const eRegex = /^[A-Za-z0-9](\.?[A-Za-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/
      return value && (eRegex.test(value))
    },
    hasAlphachars: (value) => {
      const regex = /[A-Za-z]+/
      return value && regex.test(value)
    }
  },
  getValue: {
    characters: (value) => {
      const regex = /\s*/g
      return (value && value.replace(regex, '')) || ''
    }
  }
}

const regexCheck = (validationType, type, ...args) => {
  try {
    return regexRegistory[validationType][type](...args)
  } catch (err) {
    return false
  }
}

export default regexCheck
