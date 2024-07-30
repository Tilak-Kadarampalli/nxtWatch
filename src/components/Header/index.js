import {Component} from 'react'
import Popup from 'reactjs-popup'
import {Link, Redirect, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {
  HeaderDiv,
  HeaderLogo,
  HeaderMenu,
  ThemeSwitchButton,
  ProfileSwitchButton,
  LogOutButton,
  BurgerMenu,
  HamburgerMenuButton,
} from '../../styledComponents'
import {PopUpDiv, PopUpButton} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'
import SideBar from '../SideBar'
import PopUp from '../PopUp'

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
                    alt="website logo"
                  />
                </Link>

                <BurgerMenu darkTheme={darkTheme} showHeader={showHeader}>
                  <ThemeSwitchButton
                    darkTheme={darkTheme}
                    type="button"
                    onClick={changeTheme}
                    data-testid="theme"
                  >
                    {darkTheme ? <FiSun /> : <FaMoon />}
                  </ThemeSwitchButton>

                  <ProfileSwitchButton>
                    {' '}
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
                      alt="profile"
                      width="32px"
                      height="32px"
                    />
                  </ProfileSwitchButton>

                  <HamburgerMenuButton
                    darkTheme={darkTheme}
                    type="button"
                    onClick={toggleHeader}
                  >
                    <GiHamburgerMenu />{' '}
                  </HamburgerMenuButton>

                  <HamburgerMenuButton
                    darkTheme={darkTheme}
                    type="button"
                    onClick={toggleHeader}
                  >
                    <Popup trigger={<FiLogOut />} modal>
                      {close => <PopUp close={close} />}
                    </Popup>
                  </HamburgerMenuButton>

                  <ProfileSwitchButton>
                    <Popup
                      trigger={
                        <LogOutButton darkTheme={darkTheme} className="button">
                          {' '}
                          Logout{' '}
                        </LogOutButton>
                      }
                      modal
                    >
                      {close => <PopUp close={close} />}
                    </Popup>
                  </ProfileSwitchButton>
                </BurgerMenu>
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

export default withRouter(Header)
