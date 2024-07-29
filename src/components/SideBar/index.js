import {withRouter} from 'react-router-dom'
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

const SideBar = props => {
  const {match} = props
  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value

        return (
          <SideBarDiv darkTheme={darkTheme}>
            <SideBarLinks>
              <SideBarCentered>
                <NavLink darkTheme={darkTheme} active={match.path === '/'}>
                  <LinkDiv darkTheme={darkTheme}>
                    <AiFillHome
                      color={match.path === '/' ? '#ff0b37' : 'inherit'}
                    />{' '}
                    <LinkText darkTheme={darkTheme} to="/">
                      Home
                    </LinkText>
                  </LinkDiv>
                </NavLink>

                <NavLink
                  darkTheme={darkTheme}
                  active={match.path === '/trending'}
                >
                  <LinkDiv darkTheme={darkTheme}>
                    <FaFireAlt
                      color={match.path === '/trending' ? '#ff0b37' : 'inherit'}
                    />{' '}
                    <LinkText darkTheme={darkTheme} to="/trending">
                      Trending
                    </LinkText>
                  </LinkDiv>
                </NavLink>

                <NavLink
                  darkTheme={darkTheme}
                  active={match.path === '/gaming'}
                >
                  <LinkDiv darkTheme={darkTheme}>
                    <SiYoutubegaming
                      color={match.path === '/gaming' ? '#ff0b37' : 'inherit'}
                    />{' '}
                    <LinkText darkTheme={darkTheme} to="/gaming">
                      Gaming
                    </LinkText>
                  </LinkDiv>
                </NavLink>

                <NavLink
                  darkTheme={darkTheme}
                  active={match.path === '/saved-videos'}
                >
                  <LinkDiv darkTheme={darkTheme}>
                    <RiPlayListAddFill
                      color={
                        match.path === '/saved-videos' ? '#ff0b37' : 'inherit'
                      }
                    />{' '}
                    <LinkText darkTheme={darkTheme} to="/saved-videos">
                      Saved Videos
                    </LinkText>
                  </LinkDiv>
                </NavLink>
              </SideBarCentered>
            </SideBarLinks>
            <ContactDiv>
              <ContactHead as="p">CONTACT US</ContactHead>
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

export default withRouter(SideBar)
