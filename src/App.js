import './App.css'
import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'

class App extends Component {
  state = {darkTheme: true}

  changeTheme = darkTheme => {
    this.setState({darkTheme: !darkTheme})
  }

  render() {
    const {darkTheme} = this.state
    return (
      <ThemeContext.Provider value={{darkTheme, changeTheme: this.changeTheme}}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
        <Login />
      </ThemeContext.Provider>
    )
  }
}

export default App
