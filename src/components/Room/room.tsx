import React from 'react'
import './room.scss'

import MessageField from '../MessageField'
import UsersList from '../UsersList'

const Room: React.FunctionComponent = () => {
  return (
    <div className="room">
      <div className="room__usersBox">
        <UsersList />
      </div>
      <div className="room__messageBox">
        <MessageField />
      </div>
    </div>
  )
}

export default Room
