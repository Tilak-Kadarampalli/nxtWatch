import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import Header from '../Header'
import SideBar from '../SideBar'
import {DetailsContainer} from './styledComponents'

class VideoDetails extends Component {
  state = {videoDetails: {}}

  componentDidMount() {
    this.getVideoDetails()
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
        publishedAt: rawData.published_at,
        description: rawData.description,
      }

      this.setState({videoDetails: processedData})
    }
  }

  render() {
    const {videoDetails} = this.state
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
      <div>
        <Header />
        <DetailsContainer>
          <SideBar />
          <ReactPlayer url={videoUrl} />
        </DetailsContainer>
      </div>
    )
  }
}

export default VideoDetails
