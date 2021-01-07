import React from 'react'
import './home.scss'

import HomeHoc from '../../helper/hoc/home-hoc'
import MessageField from '../Message/MessageField'
import UsersList from '../User/UsersList'
import SearchUser from '../User/SearchUser'

type typeUser = {
  name: string
  surname: string
  online: boolean
  id: number
}
type messageItem = {
  message: string
  date: string
  time: string
}

type typeProps = {
  userList: typeUser[]
  messageList: messageItem[]
}

const Home: React.FunctionComponent<typeProps> = ({
  userList,
  messageList,
}: typeProps) => {
  return (
    <div className="home">
      <div className="home__usersBox">
        <div className="home__searchBox">
          <SearchUser />
        </div>
        <UsersList userList={userList} />
      </div>
      <div className="home__messageBox">
        <MessageField messageList={messageList} />
      </div>
    </div>
  )
}

export default HomeHoc(Home)
