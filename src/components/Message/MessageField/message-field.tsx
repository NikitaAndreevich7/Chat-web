import React from 'react'
import './message-field.scss'

import MessageFieldFooter from '../MessageFieldFooter'
import MessageFieldHeader from '../MessageFieldHeader'
import MessageList from '../MessageList'

type messageItem = {
  message: string
  date: string
  time: string
}

type typeProps = {
  messageList: messageItem[]
}

const MessageField: React.FunctionComponent<typeProps> = ({
  messageList,
}: typeProps) => {
  return (
    <div className="mesField">
      <MessageFieldHeader />
      <MessageList messageList={messageList} />
      <MessageFieldFooter />
    </div>
  )
}

export default MessageField
