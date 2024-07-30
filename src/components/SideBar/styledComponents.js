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
  max-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: inherit;
  background-color: ${props => (props.darkTheme ? '#000000' : ' #ffffff')};
  @media screen and ${device.lg} {
    height: 100%;
    justify-content: space-between;
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

export const LinkDiv = styled.li`
  color: ${props => (props.darkTheme ? '#ffffff' : ' #000000')};
`
export const SideBarCentered = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  align-items: center;
  @media screen and ${device.lg} {
    justify-content: flex-start;
  }
`

export const LinkText = styled(Link)`
  color: ${props => (props.darkTheme ? '#ffffff' : ' #000000')};
  margin: 8px 8px 8px 36px;
  text-decoration: none;
`

export const NavLink = styled.div`
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
    min-width: 25vw;
  }
`
export const ContactDiv = styled.div`
  align-self: flex-start;
  display: none;
  margin: 20px;

  @media screen and ${device.lg} {
    justify-content: flex-start;
    display: flex;
    flex-direction: column;
  }
`
export const ContactHead = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #000000;
`
export const ContactDesc = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #000000;
`
export const ContactIcons = styled.div`
  display: flex;
  flex-direction: row;
`

export const ContactIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 8px;
`
