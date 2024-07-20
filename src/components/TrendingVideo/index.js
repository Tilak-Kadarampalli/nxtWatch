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
      <ThumbnailImg src={thumbnailUrl} />
      <TrendingDetails>
        <VideoTitle>{title}</VideoTitle>
        <VideoSubText>{channelName}</VideoSubText>
        <VideoSubText>
          {viewCount} . {publishedAt}
        </VideoSubText>
      </TrendingDetails>
    </TrendingVideoDiv>
  )
}

export default TrendingVideo
