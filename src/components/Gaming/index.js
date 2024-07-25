import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaFireAlt} from 'react-icons/fa'
import Header from '../Header'
import SideBar from '../SideBar'
import GamingItem from '../GamingItem'
import ThemeContext from '../../context/ThemeContext'
import {LargeSideBarDiv} from '../VideoDetails/styledComponents'
import {
  TrendingMain,
  TrendingDiv,
  TrendingCont,
  TrendingBanner,
  TrendingHead,
  LogoDiv,
} from '../Trending/styledComponents'
import {GamingList} from './styledComponents'

class Gaming extends Component {
  state = {gamingVideos: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    const url = 'https://apis.ccbp.in/videos/gaming'
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
      const updatedGamingList = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))

      this.setState({gamingVideos: updatedGamingList})
    }
  }

  render() {
    const {gamingVideos} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <TrendingMain data-testid="gaming" darkTheme={darkTheme}>
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
                    <TrendingHead>Gaming</TrendingHead>
                  </TrendingBanner>
                  <GamingList>
                    {gamingVideos.map(eachGame => (
                      <GamingItem key={eachGame.id} details={eachGame} />
                    ))}
                  </GamingList>
                </TrendingCont>
              </TrendingDiv>
            </TrendingMain>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
