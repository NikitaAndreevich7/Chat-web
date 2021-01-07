import React from 'react'
import './message-field-header.scss'
import { Link } from 'react-router-dom'

import Exit from '../../../ui/svg/exit.svg'
import Menu from '../../../ui/svg/menu.svg'

import { store } from '../../../store/store'
import { MenuCondition } from '../../../store/store.actions'

const MessageFieldHeader: React.FunctionComponent = () => {
  const {
    state: { menu },
    dispatch,
  } = React.useContext(store)

  const changeConditionMenu = React.useCallback(
    () => dispatch(MenuCondition(menu ? false : true)),
    [dispatch],
  )

  return (
    <div className="mesFieldHeader">
      <img
        src={Menu}
        className="mesFieldHeader__btnMenu"
        alt=""
        onClick={changeConditionMenu}
      />
      <Link to={'/auth'} className="mesFieldHeader__btnExitBox">
        <img src={Exit} className="mesFieldHeader__btnExit" alt="" />
      </Link>
    </div>
  )
}

export default MessageFieldHeader
