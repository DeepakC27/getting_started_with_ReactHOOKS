import React from 'react'
import './index.scss'

const Button = (props) => {
  return (
    <button
      className={'btn ' + (props.className ? props.className : '')}
      disabled={props.disabled || false}
      onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
