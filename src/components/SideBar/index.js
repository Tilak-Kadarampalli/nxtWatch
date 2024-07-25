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
  ContactDiv,
  ContactHead,
  ContactDesc,
  ContactIcons,
  ContactIcon,
} from './styledComponents'

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
                <NavLink
                  darkTheme={darkTheme}
                  active={location.pathname === '/'}
                  to="/"
                >
                  <LinkDiv darkTheme={darkTheme}>
                    <AiFillHome
                      color={location.pathname === '/' ? '#ff0b37' : 'inherit'}
                    />{' '}
                    <LinkText darkTheme={darkTheme}>Home</LinkText>
                  </LinkDiv>
                </NavLink>

                <NavLink
                  darkTheme={darkTheme}
                  active={location.pathname === '/trending'}
                  to="/trending"
                >
                  <LinkDiv darkTheme={darkTheme}>
                    <FaFireAlt
                      color={
                        location.pathname === '/trending'
                          ? '#ff0b37'
                          : 'inherit'
                      }
                    />{' '}
                    <LinkText darkTheme={darkTheme}>Trending</LinkText>
                  </LinkDiv>
                </NavLink>

                <NavLink
                  darkTheme={darkTheme}
                  active={location.pathname === '/gaming'}
                  to="/gaming"
                >
                  <LinkDiv darkTheme={darkTheme}>
                    <SiYoutubegaming
                      color={
                        location.pathname === '/gaming' ? '#ff0b37' : 'inherit'
                      }
                    />{' '}
                    <LinkText darkTheme={darkTheme}>Gaming</LinkText>
                  </LinkDiv>
                </NavLink>

                <NavLink
                  darkTheme={darkTheme}
                  active={location.pathname === '/saved-videos'}
                  to="/saved-videos"
                >
                  <LinkDiv darkTheme={darkTheme}>
                    <RiPlayListAddFill
                      color={
                        location.pathname === '/saved-videos'
                          ? '#ff0b37'
                          : 'inherit'
                      }
                    />{' '}
                    <LinkText darkTheme={darkTheme}>Saved Videos</LinkText>
                  </LinkDiv>
                </NavLink>
              </SideBarCentered>
            </SideBarLinks>
            <ContactDiv>
              <ContactHead>CONTACT US</ContactHead>
              <ContactIcons>
                <ContactIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                  alt="facebook logo"
                />
                <ContactIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <ContactIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ContactIcons>
              <ContactDesc>
                Enjoy! Now to see your channels and recommendations!
              </ContactDesc>
            </ContactDiv>
          </SideBarDiv>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SideBar
