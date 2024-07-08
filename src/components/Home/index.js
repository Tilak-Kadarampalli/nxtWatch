import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoMdClose} from 'react-icons/io'
import {FaSearch} from 'react-icons/fa'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  LargeSideBarDiv,
  HomeMain,
  HomeDiv,
  HomeCont,
  Banner,
  BannerText,
  GetItNow,
  CloseButton,
  HomeContent,
  SearchBox,
  SearchField,
  SearchButton,
  VideosList,
} from './styledComponents'

class Home extends Component {
  state = {
    displayBanner: true,
    videosList: [],
    isLoading: true,
    searchQuery: '',
    videosError: false,
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({isLoading: true})
    const {searchQuery} = this.state

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchQuery}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      this.setState({isLoading: false})

      const updatedVideosList = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        channelName: eachVideo.channel.name,
        channelProfileImgUrl: eachVideo.channel.profile_image_url,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))

      console.log(updatedVideosList)

      this.setState({videosList: updatedVideosList, videosError: false})
    } else {
      this.setState({videosError: true})
      console.log('Error')
    }
  }

  closeBanner = () => {
    this.setState({displayBanner: false})
  }

  render() {
    const {displayBanner} = this.state
    return (
      <HomeMain>
        <Header />
        <HomeDiv>
          <LargeSideBarDiv>
            <SideBar />
          </LargeSideBarDiv>
          <HomeCont>
            {displayBanner && (
              <Banner>
                <BannerText>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="banner logo"
                    height="36px"
                    width="128px"
                  />
                  <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
                  <GetItNow>GET IT NOW</GetItNow>
                </BannerText>

                <CloseButton onClick={this.closeBanner}>
                  <IoMdClose />
                </CloseButton>
              </Banner>
            )}

            <HomeContent>
              <SearchBox>
                <SearchField type="search" placeholder="Search" />
                <SearchButton>
                  <FaSearch />
                </SearchButton>
              </SearchBox>
              <VideosList>
                <li>Video</li>
              </VideosList>
            </HomeContent>
          </HomeCont>
        </HomeDiv>
      </HomeMain>
    )
  }
}
export default Home
