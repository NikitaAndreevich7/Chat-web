import React from 'react'
import './user-item.scss'
import { store } from '../../../store/store'
import { MenuCondition } from '../../../store/store.actions'
import { IUserItem } from '../../../interface'

const UserItem = ({ name, surname, online, color }: IUserItem) => {
  const {
    state: { menu },
    dispatch,
  } = React.useContext(store)

  const changeConditionMenu = React.useCallback(
    () => dispatch(MenuCondition(false)),
    [dispatch],
  )

  return (
    <div className="user" onClick={changeConditionMenu}>
      <div className="user__wrapper">
        <div className="user__imageBox" style={{ backgroundColor: color }}>
          <span
            className="user__online"
            style={{ backgroundColor: online ? 'green' : 'silver' }}
          ></span>
          <p className="user__imageText">
            {name.slice(0, 1)}
            {surname.slice(0, 1)}
          </p>
        </div>
        <div className="user__nameBox">
          <p className="user__nameText">
            {name} {surname}
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserItem
