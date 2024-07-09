import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const VideoItem = props => {
  const {details} = props
  const {
    id,
    title,
    channelName,
    thumbnailUrl,
    viewsCount,
    publishedAt,
    channelProfileImgUrl,
  } = details
  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <li>
            <Link to={`videos/${id}`}>
              <img src={thumbnailUrl} />
              <h4>{title}</h4>
              <p>{viewsCount}</p>
            </Link>
          </li>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem
