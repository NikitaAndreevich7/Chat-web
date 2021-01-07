import React from 'react'
import './message-list.scss'

import MessageItem from '../MessageItem'
import { IMessageItem } from '../../../interface'

interface typeProps {
  messageList: IMessageItem[]
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
