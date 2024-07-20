import {FaFireAlt} from 'react-icons/fa'
import Header from '../Header'
import SideBar from '../SideBar'
import TrendingVideo from '../TrendingVideo'
import ThemeContext from '../../context/ThemeContext'
import {
  TrendingMain,
  TrendingDiv,
  TrendingCont,
  TrendingBanner,
  TrendingHead,
  LogoDiv,
} from '../Trending/styledComponents'
import {LargeSideBarDiv} from '../VideoDetails/styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme, savedVideos} = value

      return (
        <TrendingMain>
          <Header />
          <TrendingDiv>
            <LargeSideBarDiv>
              <SideBar />
            </LargeSideBarDiv>
            <TrendingCont>
              <TrendingBanner>
                <LogoDiv>
                  <FaFireAlt color="#ff0000" size="32px" />
                </LogoDiv>
                <TrendingHead>Saved Videos</TrendingHead>
              </TrendingBanner>
              <ul>
                {savedVideos.map(eachVideo => (
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

export default SavedVideos
