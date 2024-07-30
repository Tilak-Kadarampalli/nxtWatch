import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaFireAlt} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import GamingItem from '../GamingItem'
import ThemeContext from '../../context/ThemeContext'
import {LargeSideBarDiv} from '../VideoDetails/styledComponents'
import {
  TrendingMain,
  TrendingDiv,
  TrendingCont,
  TrendingBanner,
  TrendingHead,
  LogoDiv,
} from '../Trending/styledComponents'
import {GamingList, GamingCont} from './styledComponents'
import {FailureContainer} from '../Home/styledComponents'

const apiStateConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {gamingVideos: [], apiStatus: apiStateConstants.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStateConstants.inProgress})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()

      const rawData = data.videos
      const updatedGamingList = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        gamingVideos: updatedGamingList,
        apiStatus: apiStateConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStateConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {gamingVideos} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <GamingCont darkTheme={darkTheme}>
              <TrendingBanner>
                <LogoDiv>
                  <FaFireAlt color="#ff0000" size="32px" />
                </LogoDiv>
                <TrendingHead>Gaming</TrendingHead>
              </TrendingBanner>
              <GamingList>
                {gamingVideos.map(eachGame => (
                  <GamingItem key={eachGame.id} details={eachGame} />
                ))}
              </GamingList>
            </GamingCont>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <FailureContainer>
            <img
              src={
                darkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
              width="324px"
            />
            <h1>Oops! Something Went Wrong</h1>
            <p>We are having some trouble</p>

            <button type="button" onClick={this.getGamingVideos}>
              Retry
            </button>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderLoadingView = () => (
    <FailureContainer>
      <div
        className="profile-loader-container profile-card"
        data-testid="loader"
      >
        <Loader type="ThreeDots" color="#6366f1" height="50" width="50" />
      </div>
    </FailureContainer>
  )

  renderContent = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStateConstants.success:
        return this.renderSuccessView()
      case apiStateConstants.failure:
        return this.renderFailureView()
      case apiStateConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value

          return <div data-testid="gaming">{this.renderContent()}</div>
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
