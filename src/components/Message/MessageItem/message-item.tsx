import React from 'react'
import MessageFieldHeader from '../MessageFieldHeader'
import './message-item.scss'

import { IMessageItem } from '../../../interface'

const MessageItem: React.FunctionComponent<IMessageItem> = ({
  message,
  date,
  time,
  firstName,
  lastName,
  color,
}: IMessageItem) => {
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
