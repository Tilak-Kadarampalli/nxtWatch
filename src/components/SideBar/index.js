import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {SideBarDiv} from '../../styledComponents'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme} = value

      return (
        <SideBarDiv>
          <Link to="/">Home</Link>
        </SideBarDiv>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
