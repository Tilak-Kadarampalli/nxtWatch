import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaFireAlt} from 'react-icons/fa'
import {formatDistanceToNow, parse} from 'date-fns'
import Header from '../Header'
import SideBar from '../SideBar'
import TrendingVideo from '../TrendingVideo'
import ThemeContext from '../../context/ThemeContext'
import {LargeSideBarDiv} from '../VideoDetails/styledComponents'
import {
  TrendingMain,
  TrendingDiv,
  TrendingCont,
  TrendingBanner,
  TrendingHead,
  LogoDiv,
} from './styledComponents'

class Trending extends Component {
  state = {trendingVideos: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    const url = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()

      const rawData = data.videos
      const updatedVideosList = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        channelName: eachVideo.channel.name,
        channelProfileImgUrl: eachVideo.channel.profile_image_url,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: formatDistanceToNow(
          parse(eachVideo.published_at, 'MMM d, yyyy', new Date()),
          {addSuffix: true},
        ),
      }))

      this.setState({trendingVideos: updatedVideosList})
      console.log(updatedVideosList)
    }
  }

  render() {
    const {trendingVideos} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <TrendingMain data-testid="trending" darkTheme={darkTheme}>
              <Header />
              <TrendingDiv>
                <LargeSideBarDiv>
                  <SideBar />
                </LargeSideBarDiv>
                <TrendingCont darkTheme={darkTheme}>
                  <TrendingBanner>
                    <LogoDiv>
                      <FaFireAlt color="#ff0000" size="32px" />
                    </LogoDiv>
                    <TrendingHead>Trending</TrendingHead>
                  </TrendingBanner>
                  <ul>
                    {trendingVideos.map(eachVideo => (
                      <TrendingVideo key={eachVideo.id} details={eachVideo} />
                    ))}
                  </ul>
                </TrendingCont>
              </TrendingDiv>
            </TrendingMain>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
