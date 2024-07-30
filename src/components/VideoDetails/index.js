import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiPlayListAddLine} from 'react-icons/ri'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  DetailsContainer,
  VideoDetailsMain,
  VideoDetailsDiv,
  LargeSideBarDiv,
  DetailsCont,
  VideoTitle,
  VideoInfo,
  ActionButton,
  ChannelDetailsDiv,
  ChannelProfileImg,
  ChannelText,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
} from './styledComponents'
import {FailureContainer} from '../Home/styledComponents'
import ThemeContext from '../../context/ThemeContext'
import SavedVideos from '../SavedVideos'

const apiStateConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoDetails extends Component {
  state = {
    videoDetails: {},
    liked: false,
    unliked: false,
    apiStatus: apiStateConstants.initial,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  onClickLike = () => {
    const {liked, unliked} = this.state
    if (unliked) {
      this.setState({unliked: false})
    }
    this.setState(prevState => ({
      liked: !prevState.liked,
    }))
  }

  onClickDisike = () => {
    const {liked, unliked} = this.state
    if (liked) {
      this.setState({liked: false})
    }
    this.setState(prevState => ({
      unliked: !prevState.unliked,
    }))
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStateConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()

      const rawData = data.video_details
      const processedData = {
        id: rawData.id,
        title: rawData.title,
        videoUrl: rawData.video_url,
        thumbnailUrl: rawData.thumbnail_url,
        channelName: rawData.channel.name,
        channelProfileImgUrl: rawData.channel.profile_image_url,
        channelSubscriberCount: rawData.channel.subscriber_count,
        viewCount: rawData.view_count,
        publishedAt: rawData.published_at,
        description: rawData.description,
      }

      this.setState({
        videoDetails: processedData,
        apiStatus: apiStateConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStateConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {videoDetails, liked, unliked} = this.state
    const {
      id,
      title,
      videoUrl,
      thumbnailUrl,
      channelName,
      channelProfileImgUrl,
      channelSubscriberCount,
      viewCount,
      publishedAt,
      description,
    } = videoDetails
    return (
      <ThemeContext.Consumer>
        {value => {
          const {
            darkTheme,
            addToSavedVideos,
            removeSavedVideo,
            savedVideos,
          } = value
          const onClickSave = () => {
            if (savedVideos.some(video => video.id === id) === false) {
              addToSavedVideos(videoDetails)
            } else {
              removeSavedVideo(videoDetails)
            }
            this.setState(prevState => ({saved: !prevState.saved}))
          }

          const checkSaved = () => savedVideos.some(video => video.id === id)
          return (
            <DetailsCont>
              <ReactPlayer url={videoUrl} />
              <VideoTitle as="p">{title}</VideoTitle>
              <VideoInfo>
                <p>
                  {viewCount} . {publishedAt}
                </p>
                <div>
                  <ActionButton onClick={this.onClickLike} active={liked}>
                    <BiLike size={20} />
                    Like
                  </ActionButton>
                  <ActionButton onClick={this.onClickDisike} active={unliked}>
                    <BiDislike size={20} />
                    Dislike
                  </ActionButton>
                  <ActionButton onClick={onClickSave} active={checkSaved()}>
                    <RiPlayListAddLine size={20} />
                    {checkSaved() ? 'Saved' : 'Save'}
                  </ActionButton>
                </div>
              </VideoInfo>
              <hr color="#64748b" width="100%" />
              <ChannelDetailsDiv>
                <ChannelProfileImg
                  src={channelProfileImgUrl}
                  alt="channel logo"
                />
                <ChannelText>
                  <ChannelName as="p">{channelName}</ChannelName>
                  <ChannelSubscribers>
                    {channelSubscriberCount} Subscribers
                  </ChannelSubscribers>
                  <ChannelDescription>{description}</ChannelDescription>
                </ChannelText>
              </ChannelDetailsDiv>
            </DetailsCont>
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
            <p>
              We are having some trouble to complete your request. Please try
              again.
            </p>

            <button type="button" onClick={this.getVideoDetails}>
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

          return (
            <DetailsCont data-testid="videoItemDetails">
              {this.renderContent()}
            </DetailsCont>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoDetails
