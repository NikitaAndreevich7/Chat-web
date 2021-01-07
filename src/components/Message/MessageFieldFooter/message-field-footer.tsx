import React from 'react'
import './message-field-footer.scss'

import Smile from '../../../ui/svg/smile.svg'
import PaperClip from '../../../ui/svg/paperclip.svg'
import Picker from 'emoji-picker-react'

const MessageFieldFooter: React.FunctionComponent = () => {
  const [input, setInput] = React.useState<string>('')
  const [emoji, setEmoji] = React.useState<boolean>(false)
  return (
    <>
      {emoji ? (
        <div className="emojiBox">
          <Picker
            disableSearchBar={false}
            onEmojiClick={(emoji) => setInput(input + emoji)}
          />
        </div>
      ) : null}
      <div className="mesFieldFooter">
        <div>
          <img src={PaperClip} className="mesFieldFooter__btn" alt="" />
        </div>
        <div className="mesFieldFooter__inputField">
          <input
            className="mesFieldFooter__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write a message..."
            aria-label="Dollar amount (with dot and two decimal places)"
          />
        </div>
        <div onClick={() => setEmoji(!emoji)}>
          <img src={Smile} className="mesFieldFooter__btn" alt="" />
        </div>
      </div>
    </>
  )
}

export default MessageFieldFooter
