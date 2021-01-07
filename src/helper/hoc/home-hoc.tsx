import React from 'react'

type userItem = {
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
  firstName: string
  lastName: string
  color: string
  id: number
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
        color: '#9D9101',
      },
      {
        name: 'Piter',
        surname: 'Petrov',
        online: true,
        id: 2,
        color: '#002F55',
      },
      {
        name: 'Aren',
        surname: 'Kirilov',
        online: false,
        id: 3,
        color: '#FFDC33',
      },
    ])

    const [messageList, setMessage] = React.useState([
      {
        message: 'Hello nikita.This is firs message.',
        time: '11:34',
        date: '25.12.20',
        id: 1,
        firstName: 'Nikita',
        lastName: 'Tikokn',
        color: '#9D9101',
      },
      {
        message:
          'Hello nikita.This is firs message.Hello nikita.This is firs message.Hello nikita.This is firs message.Hello nikita.This is firs message.Hello nikita.This is firs message.Hello nikita.This is firs message.Hello nikita.This is firs message.Hello nikita.This is firs message.',
        time: '16:11',
        date: '05.01.21',
        id: 1,
        firstName: 'Aren',
        lastName: 'Kirilov',
        color: '#FFDC33',
      },
    ])
    return <ViewComponent userList={userList} messageList={messageList} />
  }
}

export default HomeHoc
