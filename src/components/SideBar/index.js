import ThemeContext from '../../context/ThemeContext'
import {SideBarDiv} from '../../styledComponents'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme} = value

      return (
        <SideBarDiv>
          <h1>Home</h1>
          <h1>Trending</h1>
          <h1>Gaming</h1>
          <h1>Saved Videos</h1>
        </SideBarDiv>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
