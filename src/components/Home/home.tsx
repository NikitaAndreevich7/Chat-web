import React from 'react'
import './home.scss'

import HomeHoc from '../../hoc/home-hoc'
import MessageField from '../MessageField'
import UsersList from '../UsersList'
import SearchUser from '../SearchUser'

type typeUser = {
  name: string
  surname: string
  online: boolean
  id: number
}

type typeProps = {
  userList: typeUser[]
}

const Home: React.FunctionComponent<typeProps> = ({ userList }: typeProps) => {
  return (
    <div className="home">
      <div className="home__usersBox">
        <div className="home__searchBox">
          <SearchUser />
        </div>
        <UsersList userList={userList} />
      </div>
      <div className="home__messageBox">
        <MessageField />
      </div>
    </div>
  )
}

export default HomeHoc(Home)
