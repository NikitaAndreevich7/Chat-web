import React from 'react'

type typeUser = {
  name: string
  surname: string
  online: boolean
  id: number
}

type typeUsersList = {
  userList: typeUser[]
}

const HomeHoc = (ViewComponent: React.FunctionComponent<typeUsersList>) => {
  return () => {
    const [userList, setUsers] = React.useState([
      {
        name: 'Nikita',
        surname: 'Tikokn',
        online: false,
        id: 1,
      },
      {
        name: 'Piter',
        surname: 'Petrov',
        online: true,
        id: 2,
      },
      {
        name: 'Aren',
        surname: 'Kirilov',
        online: false,
        id: 3,
      },
    ])
    return <ViewComponent userList={userList} />
  }
}

export default HomeHoc
