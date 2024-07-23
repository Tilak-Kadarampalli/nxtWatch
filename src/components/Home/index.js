import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoMdClose} from 'react-icons/io'
import {FaSearch} from 'react-icons/fa'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'

import {
  LargeSideBarDiv,
  HomeMain,
  HomeDiv,
  HomeCont,
  Banner,
  BannerText,
  GetItNow,
  CloseButton,
  HomeContent,
  SearchBox,
  SearchField,
  SearchButton,
  VideosList,
  FailureContainer,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const apiStateConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    displayBanner: true,
    videosList: [],
    searchQuery: '',
    apiStatus: apiStateConstants.initial,
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({apiStatus: apiStateConstants.inProgress})
    const {searchQuery} = this.state

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchQuery}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()

      const updatedVideosList = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        channelName: eachVideo.channel.name,
        channelProfileImgUrl: eachVideo.channel.profile_image_url,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))

      console.log(updatedVideosList)

      this.setState({
        apiStatus: apiStateConstants.success,
        videosList: updatedVideosList,
      })
    } else {
      this.setState({apiStatus: apiStateConstants.failure})
      console.log('Error')
    }
  }

  renderVideosList = () => {
    const {videosList} = this.state

    if (videosList.length === 0) {
      return this.renderEmptyView()
    }

    return (
      <VideosList>
        {videosList.map(eachVideo => (
          <VideoItem key={eachVideo.id} details={eachVideo} />
        ))}
      </VideosList>
    )
  }

  renderLoadingView = () => (
    <div className="profile-loader-container profile-card" data-testid="loader">
      <Loader type="ThreeDots" color="#6366f1" height="50" width="50" />
    </div>
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
              width="324px"
            />
            <h1>Oops! Something Went Wrong</h1>
            <p>We are having some trouble to complete your request.</p>
            <p>Please try again.</p>
            <button type="button" onClick={this.getVideosList}>
              Retry
            </button>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderEmptyView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <FailureContainer>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              width="224px"
              alt="no videos"
            />
            <h1>No Search results found</h1>
            <p>Try different key words or remove search filter</p>
            <button type="button" onClick={this.getVideosList}>
              Retry
            </button>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideosContainer = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStateConstants.success:
        return this.renderVideosList()
      case apiStateConstants.inProgress:
        return this.renderLoadingView()
      case apiStateConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  closeBanner = () => {
    this.setState({displayBanner: false})
  }

  onChangeSearch = event => {
    this.setState({searchQuery: event.target.value})
  }

  searchVideos = () => {
    this.getVideosList()
  }

  render() {
    const {displayBanner, searchQuery} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <HomeMain>
              <Header />
              <HomeDiv>
                <LargeSideBarDiv>
                  <SideBar />
                </LargeSideBarDiv>
                <HomeCont>
                  {displayBanner && (
                    <Banner>
                      <BannerText>
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="banner logo"
                          height="36px"
                          width="128px"
                        />
                        <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
                        <GetItNow>GET IT NOW</GetItNow>
                      </BannerText>

                      <CloseButton onClick={this.closeBanner}>
                        <IoMdClose />
                      </CloseButton>
                    </Banner>
                  )}

                  <HomeContent>
                    <SearchBox>
                      <SearchField
                        type="search"
                        placeholder="Search"
                        onChange={this.onChangeSearch}
                        value={searchQuery}
                      />
                      <SearchButton onClick={this.searchVideos}>
                        <FaSearch />
                      </SearchButton>
                    </SearchBox>
                    {this.renderVideosContainer()}
                  </HomeContent>
                </HomeCont>
              </HomeDiv>
            </HomeMain>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Home
