import React from 'react'

interface Props {
  children: string;
  color: string
  onClick?: () => void
  onClose?: () => void
}
const Button = ({children, onClick, color, onClose}: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClose}>{children}</button>
  )
}

export default Button 