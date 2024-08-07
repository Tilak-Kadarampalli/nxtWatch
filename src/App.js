import './App.css'
import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import Header from './components/Header'
import SideBar from './components/SideBar'
import SavedVideos from './components/SavedVideos'
import VideoDetails from './components/VideoDetails'
import NotFound from './components/NotFound'
import {
  LargeSideBarDiv,
  GlobalStyling,
  HomeDiv,
} from './components/Home/styledComponents'

class App extends Component {
  state = {darkTheme: false, showHeader: true, savedVideos: []}

  changeTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  toggleHeader = () => {
    this.setState(prevState => ({showHeader: !prevState.showHeader}))
  }

  addToSavedVideos = newVideo => {
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, newVideo],
    }))
  }

  removeSavedVideo = videoDetails => {
    this.setState(prevState => ({
      savedVideos: [
        ...prevState.savedVideos.filter(video => video.id !== videoDetails.id),
      ],
    }))
  }

  render() {
    const {darkTheme, showHeader, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          darkTheme,
          changeTheme: this.changeTheme,
          showHeader,
          toggleHeader: this.toggleHeader,
          savedVideos,
          addToSavedVideos: this.addToSavedVideos,
          removeSavedVideo: this.removeSavedVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <GlobalStyling>
            <Header />
            <HomeDiv>
              <LargeSideBarDiv>
                <SideBar />
              </LargeSideBarDiv>
              <Switch>
                <ProtectedRoute exact path="/" component={Home} />
                <ProtectedRoute exact path="/trending" component={Trending} />
                <ProtectedRoute exact path="/gaming" component={Gaming} />
                <ProtectedRoute
                  exact
                  path="/videos/:id"
                  component={VideoDetails}
                />
                <ProtectedRoute
                  exact
                  path="/saved-videos"
                  component={SavedVideos}
                />
                <Route component={NotFound} />
              </Switch>
            </HomeDiv>
          </GlobalStyling>
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
