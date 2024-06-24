import './App.css'
import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
import Login from './components/Login'

class App extends Component {
  state = {darkTheme: true}

  changeTheme = darkTheme => {
    this.setState({darkTheme: !darkTheme})
  }

  render() {
    const {darkTheme} = this.state
    return (
      <ThemeContext.Provider value={{darkTheme, changeTheme: this.changeTheme}}>
        <Login />
      </ThemeContext.Provider>
    )
  }
}

export default App
