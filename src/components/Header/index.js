import {Component} from 'react'
import {Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {
  HeaderDiv,
  HeaderLogo,
  HeaderMenu,
  ThemeSwitchButton,
  LogOutButton,
  BurgerMenu,
} from '../../styledComponents'

import ThemeContext from '../../context/ThemeContext'
import SideBar from '../SideBar'

class Header extends Component {
  state = {displayHeader: true}

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme, changeTheme, showHeader, toggleHeader} = value

          return (
            <div>
              <HeaderDiv as="nav" darkTheme={darkTheme} showHeader={showHeader}>
                <Link to="/">
                  {' '}
                  <HeaderLogo
                    src={
                      darkTheme
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                  />
                </Link>

                <BurgerMenu
                  darkTheme={darkTheme}
                  showHeader={showHeader}
                  onClick={toggleHeader}
                >
                  {' '}
                  <GiHamburgerMenu />
                </BurgerMenu>

                <HeaderMenu>
                  <ThemeSwitchButton
                    darkTheme={darkTheme}
                    type="button"
                    onClick={changeTheme}
                  >
                    {darkTheme ? <FiSun /> : <FaMoon />}
                  </ThemeSwitchButton>

                  <ThemeSwitchButton>
                    {' '}
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
                      alt="profile"
                      width="32px"
                      height="32px"
                    />
                  </ThemeSwitchButton>

                  <LogOutButton darkTheme={darkTheme} type="button">
                    Logout
                  </LogOutButton>
                </HeaderMenu>
              </HeaderDiv>
              <HeaderDiv
                darkTheme={darkTheme}
                showHeader={!showHeader}
                style={{flexDirection: 'column'}}
              >
                <BurgerMenu
                  darkTheme={darkTheme}
                  showHeader={!showHeader}
                  onClick={toggleHeader}
                  style={{alignSelf: 'end'}}
                >
                  <IoMdClose color={darkTheme ? 'white' : 'black'} size={32} />{' '}
                </BurgerMenu>
                <SideBar />
              </HeaderDiv>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Header
