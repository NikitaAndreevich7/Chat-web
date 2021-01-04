import React from 'react'
import './home.scss'

import HomeHoc from '../../hoc/home-hoc'
import MessageField from '../MessageField'
import UsersList from '../UsersList'
import SearchUser from '../SearchUser'

interface typeProps {
  users: Array<object>
}

const Home: React.FunctionComponent<typeProps> = ({ users }) => {
  return (
    <div className="home">
      <div className="home__usersBox">
        <div className="home__searchBox">
          <SearchUser />
        </div>
        <UsersList users={users} />
      </div>
      <div className="home__messageBox">
        <MessageField />
      </div>
    </div>
  )
}

export default HomeHoc(Home)
