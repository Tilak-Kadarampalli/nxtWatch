import {Component} from 'react'
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
import {
  NoSavedContainer,
  NoSavedContent,
  NoSavedImg,
  NoSavedHead,
  NoSavedDesc,
} from './styledComponents'

class SavedVideos extends Component {
  noVideosView = () => (
    <NoSavedContainer>
      <NoSavedContent>
        <NoSavedImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          alt="no saved videos"
        />
        <NoSavedHead>No saved videos found</NoSavedHead>
        <NoSavedDesc>You can save your videos while watching them</NoSavedDesc>
      </NoSavedContent>
    </NoSavedContainer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme, savedVideos} = value

          return (
            <TrendingMain data-testid="savedVideos" darkTheme={darkTheme}>
              <Header />
              <TrendingDiv>
                <LargeSideBarDiv>
                  <SideBar />
                </LargeSideBarDiv>
                <TrendingCont darkTheme={darkTheme}>
                  {savedVideos.length === 0 ? (
                    this.noVideosView()
                  ) : (
                    <>
                      <TrendingBanner>
                        <LogoDiv>
                          <FaFireAlt color="#ff0000" size="32px" />
                        </LogoDiv>
                        <TrendingHead>Saved Videos</TrendingHead>
                      </TrendingBanner>
                      <ul>
                        {savedVideos.map(eachVideo => (
                          <TrendingVideo
                            key={eachVideo.id}
                            details={eachVideo}
                          />
                        ))}
                      </ul>
                    </>
                  )}
                </TrendingCont>
              </TrendingDiv>
            </TrendingMain>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default SavedVideos
