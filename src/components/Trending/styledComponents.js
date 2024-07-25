import styled from 'styled-components'

const device = {
  sm: `(max-width : 576px)`,
  lg: `(min-width: 577px)`,
}

export const TrendingMain = styled.div`
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  background-color: ${props => (props.darkTheme ? '#181818 ' : ' #f9f9f9')};
`

export const TrendingDiv = styled.div`
  display: flex;
  width: 100vw;
  @media screen and ${device.lg} {
    flex-direction: row;
  }
`

export const TrendingCont = styled.div`
  display: flex;
  width: 70vw;
  flex-direction: column;

  background-color: ${props => (props.darkTheme ? '#181818 ' : ' #f9f9f9')};
  @media screen and ${device.sm} {
    width: 100vw;
  }
`

export const TrendingBanner = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  background-color: #cccccc;
  width: 100vw;
  height: 10vh;
`
export const LogoDiv = styled.div`
  background-color: #d7dfe9;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
`
export const TrendingHead = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: #1e293b;
  align-self: center;
  margin-left: 18px;
`
