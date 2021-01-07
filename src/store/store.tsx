import React from 'react'

import {
  MenuCondition,
  UsersList,
  MessagesList,
  Actions,
  ActionType,
} from './store.actions'
import { IUsers, IMessages } from './store.types'

interface IStoreState {
  menu: boolean
  users: IUsers | null
  messages: IMessages | null
}

interface IAppContext {
  state: IStoreState
  dispatch: React.Dispatch<Actions>
}

const initialState: IStoreState = {
  menu: false,
  users: null,
  messages: null,
}

const store = React.createContext<IAppContext>({
  state: initialState,
  dispatch: () => null,
})

const { Provider } = store

const reducer = (state: IStoreState, action: Actions) => {
  switch (action.type) {
    case ActionType.menuCondition:
      return {
        ...state,
        menu: action.payload,
      }
    case ActionType.usersList:
      return {
        ...state,
        users: action.payload,
      }
    case ActionType.messagesList:
      return {
        ...state,
        messages: action.payload,
      }

    default:
      return state
  }
}

const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, AppProvider }
