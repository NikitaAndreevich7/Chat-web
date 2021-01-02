import React from 'react'
import './form.scss'

const Form: React.FunctionComponent = () => {
  return (
    <div className="form">
      <form className="form__wrapper">
        <div className="form-group">
          <label>Room name</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter room name"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Connect
        </button>
      </form>
    </div>
  )
}

export default Form
