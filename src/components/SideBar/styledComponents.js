import styled from 'styled-components'
import {Link} from 'react-router-dom'

const device = {
  sm: `(max-width : 576px)`,
  lg: `(min-width: 577px)`,
}

export const GlobalStyling = styled.div`
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
`

export const SideBarDiv = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: inherit;
  background-color: ${props => (props.darkTheme ? '#000000' : ' #ffffff')};
  @media screen and ${device.lg} {
    width: 25vw;
    padding-left: 80px;
    justify-content: flex-start;
  }
`
export const SideBarLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and ${device.lg} {
    justify-content: flex-start;
  }
`

export const LinkDiv = styled.div`
  color: ${props => (props.darkTheme ? '#ffffff' : ' #000000')};
`
export const SideBarCentered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and ${device.lg} {
    justify-content: flex-start;
  }
`

export const LinkText = styled.span`
  color: ${props => (props.darkTheme ? '#ffffff' : ' #000000')};
  margin: 8px 8px 8px 36px;
`

export const NavLink = styled(Link)`
  min-width: 100vw;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${props => {
    if (props.darkTheme) {
      if (props.active) {
        return '#2f2f2f'
      }
      return '#000000'
    }
    if (props.active) {
      return '#e2e8f0'
    }
    return '#ffffff'
  }};
  text-decoration: none;
  @media screen and ${device.lg} {
    min-width: 30vw;
  }
`
