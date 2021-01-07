import React from 'react'
import './auth.scss'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { Link } from 'react-router-dom'

const Auth: React.FunctionComponent = () => {
  return (
    <div className="auth">
      <Tabs className="tabs__wrapper">
        <TabList>
          <Tab>Login</Tab>
          <Tab>Registration</Tab>
        </TabList>

        <TabPanel>
          <form className="auth__login">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
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
            <Link to={'/'}>
              <button type="submit" className="btn btn-primary">
                Connect
              </button>
            </Link>
          </form>
        </TabPanel>
        <TabPanel>
          <form className="auth__register">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Login"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Repeat the password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Repeat the password"
              />
            </div>
            <Link to="/">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Link>
          </form>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Auth
