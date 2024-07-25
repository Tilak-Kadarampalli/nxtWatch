import styled from 'styled-components'

const device = {
  sm: `(max-width : 576px)`,
  lg: `(min-width: 577px)`,
}

export const HomeMain = styled.div`
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
`

export const HomeDiv = styled.div`
  display: flex;
  width: 100vw;
  @media screen and ${device.lg} {
    flex-direction: row;
  }
`

export const LargeSideBarDiv = styled.div`
  max-width: 30vw;
  @media screen and ${device.sm} {
    display: none;
  }
`
export const HomeCont = styled.div`
  display: flex;
  width: 70vw;
  flex-direction: column;

  background-color: ${props => (props.darkTheme ? '#181818 ' : ' #f9f9f9')};
  @media screen and ${device.sm} {
    width: 100vw;
  }
`
export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`

export const BannerText = styled.div`
  color: #475569;
  font-size: 16px;
  width: 256px;
`

export const GetItNow = styled.button`
  border: 2px solid #475569;
  background-color: transparent;
  padding: 8px 32px 8px 32px;
  color: #475569;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 0px;
  align-self: flex-start;
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
`
export const SearchField = styled.input`
  border: none;
  border: 2px solid #cccccc;
  padding-left: 10px;
  width: 400px;
`

export const SearchButton = styled.button`
  border: none;
  padding: 4px 16px 4px 16px;
  border: 2px solid #cccccc;
  color: #c0c0c0;
`

export const VideosList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 50vh;
  overflow-y: scroll;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
