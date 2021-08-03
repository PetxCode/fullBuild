import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import PostScreen from './components/PostScreen'
import "antd/dist/antd.css"
import HeaderView from './components/HeaderView'
import DetailPage from './components/DetailPage'

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <HeaderView />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post" component={PostScreen} />
        <Route exact path="/:id" component={DetailPage} />
      </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App


