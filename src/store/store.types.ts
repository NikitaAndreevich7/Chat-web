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

export interface IUsers {
  users: userItem[]
}

export interface IMessages {
  messages: messageItem[]
}
