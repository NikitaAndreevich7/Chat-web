import React from 'react'
import './home.scss'

import HomeHoc from '../../helper/hoc/home-hoc'
import MessageField from '../Message/MessageField'
import UsersList from '../User/UsersList'
import SearchUser from '../User/SearchUser'

import { store } from '../../store/store'

type typeUser = {
  name: string
  surname: string
  online: boolean
  id: number
  color: string
}
type messageItem = {
  message: string
  date: string
  time: string
  color: string
  firstName: string
  lastName: string
  id: number
}

type typeProps = {
  userList: typeUser[]
  messageList: messageItem[]
}

const Home: React.FunctionComponent<typeProps> = ({
  userList,
  messageList,
}: typeProps) => {
  const {
    state: { menu },
    dispatch,
  } = React.useContext(store)

  const styles = {
    usersMenu: {
      display: window.innerWidth > 1024 || menu ? 'block' : 'none',
    },
  }

  return (
    <div className="home">
      <div className="home__usersBox" style={styles.usersMenu}>
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
