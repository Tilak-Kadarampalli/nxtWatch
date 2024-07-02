import {useLocation, Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {FaFireAlt} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'
import ThemeContext from '../../context/ThemeContext'
import {
  SideBarDiv,
  SideBarLinks,
  LinkDiv,
  SideBarCentered,
  LinkText,
  NavLink,
} from '../../styledComponents'

const SideBar = () => {
  const location = useLocation()
  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <SideBarDiv darkTheme={darkTheme}>
            <SideBarLinks>
              <SideBarCentered>
                <NavLink active={location.pathname === '/'} to="/">
                  <LinkDiv darkTheme={darkTheme}>
                    <AiFillHome
                      color={location.pathname === '/' ? '#fefe20' : 'inherit'}
                    />{' '}
                    <LinkText>Home</LinkText>
                  </LinkDiv>
                </NavLink>

                <NavLink
                  active={location.pathname === '/trending'}
                  to="/trending"
                >
                  <LinkDiv darkTheme={darkTheme}>
                    <AiFillHome
                      color={
                        location.pathname === '/trending'
                          ? '#ff0b37'
                          : 'inherit'
                      }
                    />{' '}
                    <LinkText>Home</LinkText>
                  </LinkDiv>
                </NavLink>
              </SideBarCentered>
            </SideBarLinks>
          </SideBarDiv>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SideBar
