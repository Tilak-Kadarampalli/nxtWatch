import {
  TrendingVideoDiv,
  ThumbnailImg,
  TrendingDetails,
  VideoTitle,
  VideoSubText,
} from './styledComponents'

const TrendingVideo = props => {
  const {details} = props
  const {
    id,
    title,
    channelName,
    channelProfileImgUrl,
    thumbnailUrl,
    viewCount,
    publishedAt,
  } = details

  return (
    <TrendingVideoDiv to={`videos/${id}`}>
      <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
      <TrendingDetails>
        <VideoTitle as="p">{title}</VideoTitle>
        <VideoSubText>{channelName}</VideoSubText>
        <VideoSubText>
          {viewCount} . {publishedAt}
        </VideoSubText>
      </TrendingDetails>
    </TrendingVideoDiv>
  )
}

export default TrendingVideo
