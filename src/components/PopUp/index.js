import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BurgerMenu} from '../../styledComponents'
import SideBar from '../SideBar'

const PopUp = () => (
  <Popup
    trigger={
      <BurgerMenu>
        <GiHamburgerMenu />
      </BurgerMenu>
    }
    modal
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <SideBar />
      </div>
    )}
  </Popup>
)

export default PopUp
