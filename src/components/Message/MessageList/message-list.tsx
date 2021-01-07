import React from 'react'
import './message-list.scss'

import MessageItem from '../MessageItem'

type messageItem = {
  message: string
  date: string
  time: string
  id: number
  firstName: string
  lastName: string
  color: string
}

type typeProps = {
  messageList: messageItem[]
}

const MessageList: React.FunctionComponent<typeProps> = ({
  messageList,
}: typeProps) => {
  const messages = messageList.map((message) => {
    const { id, ...messageItem } = message

    return (
      <li key={id}>
        <MessageItem {...messageItem} />
      </li>
    )
  })

  return <ul>{messages}</ul>
}

export default MessageList
