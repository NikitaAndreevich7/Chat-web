import React from 'react'
import './user-list.scss'

import UserItem from '../UserItem'

type typeUser = {
  name: string
  surname: string
  online: boolean
  id: number
}

type typeProps = {
  userList: typeUser[]
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
