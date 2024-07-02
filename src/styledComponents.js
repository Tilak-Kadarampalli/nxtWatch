import styled from 'styled-components'
import {Link} from 'react-router-dom'

// Breakpoints
const device = {
  sm: `(max-width : 576px)`,
  lg: `(max-width: 768px)`,
}

export const LoginBg = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
`
export const LoginCard = styled.div`
  background-color: ${props => (props.darkTheme ? '#000000' : ' #ffffff')};
  border-radius: 16px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  width: 360px;
`
export const LoginLogo = styled.img`
  width: 144px;
  align-self: center;
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
`
//  Input-fields

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const InputLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: ${props => (props.darkTheme ? '#ffffff' : ' #94a3b8')};
  margin-bottom: 4px;
`

export const InputField = styled.input`
  border: 1px solid #94a3b8;
  border-radius: 2px;
  display: flex;
  margin-bottom: 12px;
  padding-left: 12px;
  font-size: 14px;
  height: 36px;
  background-color: ${props => (props.darkTheme ? '#000000' : ' #ffffff')};
  color: ${props => (props.darkTheme ? '#ffffff' : ' #000000')};
`
export const LoginButton = styled.button`
  margin-top: 40px;
  border-radius: 8px;
  background-color: #3b82f6;
  color: white;
  padding: 8px;
  font-weight: bold;
  border: none;
`
export const ShowPasswordLabel = styled.label`
  color: ${props => (props.darkTheme ? '#ffffff' : ' #000000')};
  font-size: 16px;
  margin-left: 4px;
`

export const LoginErrorMsg = styled.p`
  font-size: 12px;
  color: #ff0b37;
`

//  Header

export const HeaderDiv = styled.div`
  min-width: 100vw;
  background-color: ${props => (props.darkTheme ? '#000000' : '#ffffff')};
  display: ${props => (props.showHeader ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`
export const HeaderLogo = styled.img`
  margin-left: 10px;
  height: 24px;
`

export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and ${device.sm} {
    display: none;
  }
`
export const BurgerMenu = styled.button`
  display: none;
  @media screen and ${device.sm} {
    background-color: transparent;
    border: none;
    display: ${props => (props.showHeader ? 'flex' : 'none')};
    color: ${props => (props.darkTheme ? '#ffffff' : ' #000000')};
  }
`

export const ThemeSwitchButton = styled.button`
  background-color: transparent;
  width: 48px;
  height: 48px;
  font-size: 24px;
  margin-right: 20px;

  color: ${props => (props.darkTheme ? '#ffffff' : ' #000000')};
  border: none;
`
export const LogOutButton = styled.button`
  background-color: transparent;
  width: 96px;
  height: 32px;
  border-radius: 2px;
  border-color: ${props => (props.darkTheme ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.darkTheme ? '#ffffff' : '#3b82f6')};
  border-width: 2px;
  margin: 4px;
  box-shadow: none;
`

// SideBar
export const SideBarDiv = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: inherit;
  background-color: ${props => (props.darkTheme ? '#000000' : ' #ffffff')};
`
export const SideBarLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: inherit;
`

export const LinkDiv = styled.div`
  color: ${props => (props.darkTheme ? '#ffffff' : ' #000000')};
`
export const SideBarCentered = styled.div`
  display: flex;
  flex-direction: column;
`

export const LinkText = styled.span`
  color: ${props => (props.darkTheme ? '#ffffff' : ' #000000')};
  margin: 8px 8px 8px 36px;
`

export const NavLink = styled(Link)`
  min-width: 100vw;
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => {
   if(props.darkTheme){
       if(props.active){
           return '#2f2f2f'
       }
       else{
       return '#000000'
       }
    else{
        if(props.active){
            return '#fefefe'
        }
        return '#ffffff'
    }
   }
  }};
  color: ${props => (props.darkTheme ? '#ffffff' : ' #000000')};
  text-decoration: none;
`
