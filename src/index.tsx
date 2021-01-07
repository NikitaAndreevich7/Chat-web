import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import Auth from './components/Auth'

let a: number = 10

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Auth} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root'),
)
