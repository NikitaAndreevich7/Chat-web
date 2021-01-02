import React from 'react'
import './message-field.scss'

import SendIcon from '../../ui/svg/send.svg'

const MessageField: React.FunctionComponent = () => {
  return (
    <div className="mesField">
      <div className="mesField__inputBox">
        <div className="input-group mesField__inputField">
          <input
            type="text"
            className="form-control"
            aria-label="Dollar amount (with dot and two decimal places)"
          />
        </div>
        <div>
          <img src={SendIcon} className="mesField__btn" alt="" />
        </div>
      </div>
    </div>
  )
}

export default MessageField
