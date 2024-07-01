import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {FaFireAlt} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'
import ThemeContext from '../../context/ThemeContext'
import {SideBarDiv, SideBarLink, SideBarText} from '../../styledComponents'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme} = value

      return (
        <SideBarDiv>
          <div>
            <Link to="/" style={{textDecoration: 'none'}}>
              <SideBarLink>
                {' '}
                <p>
                  <AiFillHome size={18} style={{marginRight: '32px'}} />{' '}
                  <SideBarText>Home</SideBarText>
                </p>
              </SideBarLink>
            </Link>
            <Link to="/" style={{textDecoration: 'none'}}>
              <SideBarLink>
                <p>
                  <FaFireAlt size={18} style={{marginRight: '32px'}} />{' '}
                  <SideBarText>Trending</SideBarText>
                </p>
              </SideBarLink>
            </Link>
            <Link to="/" style={{textDecoration: 'none'}}>
              <SideBarLink>
                <p>
                  <SiYoutubegaming size={18} style={{marginRight: '32px'}} />{' '}
                  <SideBarText>Gaming</SideBarText>
                </p>
              </SideBarLink>
            </Link>
            <Link to="/" style={{textDecoration: 'none'}}>
              <SideBarLink>
                <p>
                  <RiPlayListAddFill size={18} style={{marginRight: '32px'}} />{' '}
                  <SideBarText>Saved</SideBarText>
                </p>
              </SideBarLink>
            </Link>
          </div>
        </SideBarDiv>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
