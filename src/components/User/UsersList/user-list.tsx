import React from 'react'
import './user-list.scss'

import UserItem from '../UserItem'
import { IUserItem } from '../../../interface'

interface typeProps {
  userList: IUserItem[]
}

const UsersList = ({ userList }: typeProps) => {
  const users = userList.map((user) => {
    const { id, ...userProps } = user
    return (
      <li key={id}>
        <UserItem {...userProps} />
      </li>
    )
  })
  return <ul>{users}</ul>
}

export default UsersList
