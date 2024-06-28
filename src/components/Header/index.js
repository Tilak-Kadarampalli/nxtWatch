import {Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import PopUp from '../PopUp'
import {
  HeaderDiv,
  HeaderLogo,
  HeaderMenu,
  ThemeSwitchButton,
  LogOutButton,
  BurgerMenu,
} from '../../styledComponents'
import ThemeContext from '../../context/ThemeContext'

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme, changeTheme} = value
      return (
        <HeaderDiv as="nav" darkTheme={darkTheme}>
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

          <PopUp />

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
      )
    }}
  </ThemeContext.Consumer>
)
export default Header
