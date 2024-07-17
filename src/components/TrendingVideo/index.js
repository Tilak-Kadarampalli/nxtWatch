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

  return <li>{title}</li>
}

export default TrendingVideo
