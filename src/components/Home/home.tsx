import React from 'react'
import './home.scss'

import { store } from '../../store/store'
import { IUserItem, IMessageItem } from '../../interface'

import HomeHoc from '../../hoc/home-hoc'
import MessageField from '../Message/MessageField'
import UsersList from '../User/UsersList'
import SearchUser from '../User/SearchUser'

interface typeProps {
  userList: IUserItem[]
  messageList: IMessageItem[]
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
