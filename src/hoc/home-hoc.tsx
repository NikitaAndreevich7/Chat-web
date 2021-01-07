import React from 'react'

type userItem = {
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
  userList: userItem[]
  messageList: messageItem[]
}

const HomeHoc = (ViewComponent: React.FunctionComponent<typeProps>) => {
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

    const [messageList, setMessage] = React.useState([
      {
        message: 'Hello nikita.This is firs message.Testing functionality.',
        time: '11:34',
        date: '25.12.20',
      },
    ])
    return <ViewComponent userList={userList} messageList={messageList} />
  }
}

export default HomeHoc
