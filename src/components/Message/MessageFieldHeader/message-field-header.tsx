import React from 'react'
import './message-field-header.scss'
import { Link } from 'react-router-dom'

import Exit from '../../../ui/svg/exit.svg'

const MessageFieldHeader: React.FunctionComponent = () => {
  return (
    <div className="mesFieldHeader">
      <Link to={'/auth'}>
        <img src={Exit} className="mesFieldHeader__btn" alt="" />
      </Link>
    </div>
  )
}

export default MessageFieldHeader
