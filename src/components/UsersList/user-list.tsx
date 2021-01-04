import React from 'react'
import './user-list.scss'

import UserItem from '../UserItem'

interface typeProps {
  users: Array<object>
}

const UsersList: React.FunctionComponent<typeProps> = ({ users }) => {
  return (
    <React.Fragment>
      {users.map((user) => {
        return <UserItem {...user} />
      })}
    </React.Fragment>
  )
}

export default UsersList
