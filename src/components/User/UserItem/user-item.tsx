import React from 'react'
import './user-item.scss'

type typeUser = {
  name: string
  surname: string
  online: boolean
}

const UserItem = ({ name, surname, online }: typeUser) => {
  const colors: Array<string> = [
    '#7FFFD4',
    '#2F4F4F',
    '#C1876B',
    '#89AC76',
    '#FFDC33',
    '#D5713F',
    '#B8B799',
    '#002F55',
    '#FF43A4',
    '#9D9101',
  ]
  const randomNum: number = Math.floor(Math.random() * 10)

  return (
    <div className="user">
      <div className="user__wrapper">
        <div
          className="user__imageBox"
          style={{ backgroundColor: colors[randomNum] }}
        >
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
