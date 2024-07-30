import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import {
  VideoListItem,
  VideoLink,
  ThumbnailImg,
  VideoInfo,
  ChannelProfile,
  VideoTextDiv,
  VideoTitle,
  VideoCount,
} from './styledComponents'

const VideoItem = props => {
  const {details} = props
  const {
    id,
    title,
    channelName,
    thumbnailUrl,
    viewCount,
    publishedAt,
    channelProfileImgUrl,
  } = details

  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <VideoListItem>
            <VideoLink to={`videos/${id}`}>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoInfo>
                <ChannelProfile src={channelProfileImgUrl} alt="channel logo" />
                <VideoTextDiv>
                  <VideoTitle as="p">{title}</VideoTitle>
                  <VideoCount>{channelName}</VideoCount>
                  <VideoCount>
                    {viewCount} . {publishedAt}
                  </VideoCount>
                </VideoTextDiv>
              </VideoInfo>
            </VideoLink>
          </VideoListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem
