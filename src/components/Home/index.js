import Header from '../Header'
import SideBar from '../SideBar'
import {LargeSideBarDiv, HomeDiv} from '../../styledComponents'

const Home = () => (
  <div>
    <Header />
    <HomeDiv>
      <LargeSideBarDiv>
        <SideBar />
      </LargeSideBarDiv>
      <h1>Home Route</h1>
    </HomeDiv>
  </div>
)

export default Home
