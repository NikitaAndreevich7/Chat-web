import React from 'react'
import './message-field.scss'
import { Link } from 'react-router-dom'

import Smile from '../../ui/svg/smile.svg'
import PaperClip from '../../ui/svg/paperclip.svg'
import Picker from 'emoji-picker-react'
import Exit from '../../ui/svg/exit.svg'

const MessageField: React.FunctionComponent = () => {
  const [input, setInput] = React.useState('')
  const [emoji, setEmoji] = React.useState(false)

  return (
    <div className="mesField">
      <div className="mesField__headerBox">
        <Link to={'/auth'}>
          <img src={Exit} className="mesField__btn" alt="" />
        </Link>
      </div>
      {emoji ? (
        <div className="mesField__emojiBox">
          <Picker
            disableSearchBar={false}
            onEmojiClick={(emoji) => setInput(input + emoji)}
          />
        </div>
      ) : null}
      <div className="mesField__inputBox">
        <div>
          <img src={PaperClip} className="mesField__btn" alt="" />
        </div>
        <div className="mesField__inputField">
          <input
            className="mesField__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write a message..."
            aria-label="Dollar amount (with dot and two decimal places)"
          />
        </div>
        <div onClick={() => setEmoji(!emoji)}>
          <img src={Smile} className="mesField__btn" alt="" />
        </div>
      </div>
    </div>
  )
}

export default MessageField
