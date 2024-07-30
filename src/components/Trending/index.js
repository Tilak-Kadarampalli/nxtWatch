import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaFireAlt} from 'react-icons/fa'
import TrendingVideo from '../TrendingVideo'
import ThemeContext from '../../context/ThemeContext'
import {
  TrendingMain,
  TrendingDiv,
  TrendingCont,
  TrendingBanner,
  TrendingHead,
  LogoDiv,
} from './styledComponents'
import {FailureContainer} from '../Home/styledComponents'

const apiStateConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {trendingVideos: [], apiStatus: apiStateConstants.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStateConstants.inProgress})
    const url = 'https://apis.ccbp.in/videos/trending'
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
      const updatedVideosList = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        channelName: eachVideo.channel.name,
        channelProfileImgUrl: eachVideo.channel.profile_image_url,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))

      this.setState({
        trendingVideos: updatedVideosList,
        apiStatus: apiStateConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStateConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {trendingVideos} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <TrendingCont darkTheme={darkTheme}>
              <TrendingBanner>
                <LogoDiv>
                  <FaFireAlt color="#ff0000" size="32px" />
                </LogoDiv>
                <TrendingHead>Trending</TrendingHead>
              </TrendingBanner>
              <ul>
                {trendingVideos.map(eachVideo => (
                  <TrendingVideo key={eachVideo.id} details={eachVideo} />
                ))}
              </ul>
            </TrendingCont>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

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
            <p>We are having some trouble to complete your request.</p>
            <p>Please try again.</p>
            <button type="button" onClick={this.getTrendingVideos}>
              Retry
            </button>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderTrending = () => {
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

          return <div data-testid="trending">{this.renderTrending()}</div>
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
