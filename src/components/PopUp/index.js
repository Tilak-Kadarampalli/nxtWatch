import {Component} from 'react'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {PopUpDiv, PopUpButton} from '../Header/styledComponents'
import ThemeContext from '../../context/ThemeContext'

class PopUp extends Component {
  state = {loggedOut: false}

  render() {
    const {close, history} = this.props
    const {loggedOut} = this.state
    if (loggedOut) {
      history.replace('/login')
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <PopUpDiv className="modal">
              <div className="content">Are you sure, you want to logout?</div>
              <div className="actions">
                <PopUpButton
                  cancel
                  className="button"
                  onClick={() => {
                    close()
                  }}
                >
                  Cancel
                </PopUpButton>

                <PopUpButton
                  onClick={() => {
                    Cookies.remove('jwt_token')
                    this.setState({loggedOut: true})
                  }}
                >
                  Confirm
                </PopUpButton>
              </div>
            </PopUpDiv>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default withRouter(PopUp)
