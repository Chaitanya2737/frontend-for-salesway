import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

const Button = ({props}) => {
  return (
    <span
    style={{
      boxShadow: "0px 0px 0px 1px rgb(0 0 0 / 23%)",
      borderRadius: "20px",
      margin: "10px",
      padding: "5px",
    }}
  >
    {props}<MdKeyboardArrowDown />
  </span>
  )
}

export default Button