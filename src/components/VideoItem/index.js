import {Link} from 'react-router-dom'
import {format, parse, formatDistanceToNow} from 'date-fns'
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

  const convertDateToDuration = date => {
    const parsedDate = parse(date, 'MMM d, yyyy', new Date())
    const duration = formatDistanceToNow(parsedDate, {addSuffix: true})
    return duration
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <VideoListItem>
            <VideoLink to={`videos/${id}`}>
              <ThumbnailImg src={thumbnailUrl} />
              <VideoInfo>
                <ChannelProfile src={channelProfileImgUrl} alt="" />
                <VideoTextDiv>
                  <VideoTitle>{title}</VideoTitle>
                  <VideoCount>{channelName}</VideoCount>
                  <VideoCount>
                    {viewCount} . {convertDateToDuration(publishedAt)}
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
