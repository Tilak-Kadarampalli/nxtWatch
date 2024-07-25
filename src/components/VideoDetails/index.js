import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow, parse} from 'date-fns'
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
import ThemeContext from '../../context/ThemeContext'

class VideoDetails extends Component {
  state = {
    videoDetails: {},
    liked: false,
    unliked: false,
    saved: false,
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
        publishedAt: formatDistanceToNow(
          parse(rawData.published_at, 'MMM d, yyyy', new Date()),
          {addSuffix: true},
        ),
        description: rawData.description,
      }

      this.setState({
        videoDetails: processedData,
      })
    }
  }

  render() {
    const {videoDetails, liked, unliked, saved} = this.state
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
          const {darkTheme, addToSavedVideos} = value
          const onClickSave = () => {
            addToSavedVideos(videoDetails)
          }

          return (
            <VideoDetailsMain
              data-testid="videoItemDetails"
              darkTheme={darkTheme}
            >
              <Header />
              <VideoDetailsDiv>
                <LargeSideBarDiv>
                  <SideBar />
                </LargeSideBarDiv>
                <DetailsCont>
                  <ReactPlayer url={videoUrl} />
                  <VideoTitle>{title}</VideoTitle>
                  <VideoInfo>
                    <p>
                      {viewCount} . {publishedAt}
                    </p>
                    <div>
                      <ActionButton onClick={this.onClickLike} active={liked}>
                        <BiLike size={20} />
                        Like
                      </ActionButton>
                      <ActionButton
                        onClick={this.onClickDisike}
                        active={unliked}
                      >
                        <BiDislike size={20} />
                        Dislike
                      </ActionButton>
                      <ActionButton onClick={onClickSave} active={saved}>
                        <RiPlayListAddLine size={20} /> Save
                      </ActionButton>
                    </div>
                  </VideoInfo>
                  <hr color="#64748b" width="100%" />
                  <ChannelDetailsDiv>
                    <ChannelProfileImg src={channelProfileImgUrl} />
                    <ChannelText>
                      <ChannelName>{channelName}</ChannelName>
                      <ChannelSubscribers>
                        {channelSubscriberCount} Subscribers
                      </ChannelSubscribers>
                      <ChannelDescription>{description}</ChannelDescription>
                    </ChannelText>
                  </ChannelDetailsDiv>
                </DetailsCont>
              </VideoDetailsDiv>
            </VideoDetailsMain>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoDetails
