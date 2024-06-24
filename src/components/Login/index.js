import {Component} from 'react'
import {Heading} from '../../styledComponents'
import ThemeContext from '../../context/ThemeContext'

class Login extends Component {
  state = {showPassword: false, password: ''}

  checkPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {showPassword, password} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <div>
              <Heading darkTheme={darkTheme}>Login Route</Heading>
              <input type="checkbox" onChange={this.checkPassword} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={this.updatePassword}
              />
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
