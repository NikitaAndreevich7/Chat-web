import React from 'react'
import './search-user.scss'

const SearchUser: React.FunctionComponent = () => {
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Search" />
    </div>
  )
}

export default SearchUser
