import React from 'react'
import MessageStyle from './Message.module.css'

const Message = (props) => {
  const { message, error } = props
  return (
    <div className={MessageStyle.container}>
      {message}
      {error}
    </div>
  )
}

export default Message
