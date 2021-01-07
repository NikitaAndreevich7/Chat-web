import React from 'react'
import MessageFieldHeader from '../MessageFieldHeader'
import './message-item.scss'

type typeProps = {
  message: string
  date: string
  time: string
  firstName: string
  lastName: string
  color: string
}

const MessageItem: React.FunctionComponent<typeProps> = ({
  message,
  date,
  time,
  firstName,
  lastName,
  color,
}: typeProps) => {
  return (
    <div className="wrapper">
      <div className="userMsg">
        <div className="userMsg__wrapper" style={{ backgroundColor: color }}>
          {firstName.slice(0, 1)}
          {lastName.slice(0, 1)}
        </div>
      </div>
      <div className="message">
        <div className="message__wrapper">
          <p>{message}</p>
        </div>
        <div className="message__time">{time}</div>
      </div>
    </div>
  )
}

export default MessageItem
