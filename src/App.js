import './App.css'
import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'

class App extends Component {
  state = {darkTheme: true, showHeader: true}

  changeTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  toggleHeader = () => {
    this.setState(prevState => ({showHeader: !prevState.showHeader}))
  }

  render() {
    const {darkTheme, showHeader} = this.state
    return (
      <ThemeContext.Provider
        value={{
          darkTheme,
          changeTheme: this.changeTheme,
          showHeader,
          toggleHeader: this.toggleHeader,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
