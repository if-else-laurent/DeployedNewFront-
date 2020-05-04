import React from 'react'
import MessageStyle from './Message.module.css'

const Message = (props) => {
  const { message } = props
  return (
    <div className={MessageStyle.container}>
      {message}
    </div>
  )
}

export default Message
