import {GameDiv, GameImg, GameTitle, GameViews} from './styledComponents'

const GamingItem = props => {
  const {details} = props
  const {id, title, thumbnailUrl, viewCount} = details
  return (
    <GameDiv>
      <GameImg src={thumbnailUrl} />
      <GameTitle>{title}</GameTitle>
      <GameViews>{viewCount} Watching Worldwide</GameViews>
    </GameDiv>
  )
}

export default GamingItem
