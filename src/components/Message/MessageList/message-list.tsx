import React from 'react'
import './message-list.scss'

import MessageItem from '../MessageItem'

type messageItem = {
  message: string
  date: string
  time: string
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

  return <div></div>
}

export default MessageList
