import React from 'react'
import './index.scss'

const Input = (props) => (
  <div className={'input-wrapper ' + (props.className || '') } >
    <input type={props.type}
      id={props.id}
      name={props.name}
      title={props.title}
      autoComplete={props.autoComplete || 'off'}
      style={props.style}
      onClick={props.onClick}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      maxLength={props.maxLength}
      placeholder={props.placeholder}
      value={props.value}
      checked={props.checked}
      disabled={props.disabled}
      required={props.required} />
    <span className={props.value ? 'input-filled' : ''}>{props.placeholder}</span>
  </div>
)

export default Input
