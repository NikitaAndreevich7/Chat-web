import { IUsers, IMessages } from './store.types'

export enum ActionType {
  menuCondition = 'MENU_CONDITION',
  usersList = 'USERS_LIST',
  messagesList = 'MESSAGES_LIST',
}

interface IMenuCondition {
  type: ActionType.menuCondition
  payload: boolean
}

interface IUsersList {
  type: ActionType.usersList
  payload: IUsers
}

interface IMessageList {
  type: ActionType.messagesList
  payload: IMessages
}

export type Actions = IMenuCondition | IUsersList | IMessageList

export const MenuCondition = (condition: boolean): IMenuCondition => ({
  type: ActionType.menuCondition,
  payload: condition,
})

export const UsersList = (users: IUsers): IUsersList => ({
  type: ActionType.usersList,
  payload: users,
})

export const MessagesList = (messages: IMessages): IMessageList => ({
  type: ActionType.messagesList,
  payload: messages,
})
