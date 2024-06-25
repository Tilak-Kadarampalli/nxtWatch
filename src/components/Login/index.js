import {Component} from 'react'
import {
  LoginBg,
  LoginCard,
  LoginLogo,
  LoginForm,
  InputLabel,
  InputContainer,
  InputField,
  LoginButton,
  LoginErrorMsg,
  ShowPasswordLabel,
} from '../../styledComponents'
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
            <LoginBg darkTheme={darkTheme}>
              <LoginCard darkTheme={darkTheme}>
                <LoginLogo
                  src={
                    darkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="logo"
                />
                <LoginForm darkTheme={darkTheme}>
                  <InputContainer>
                    <InputLabel darkTheme={darkTheme}>USERNAME</InputLabel>
                    <InputField
                      type="text"
                      placeholder="Username"
                      darkTheme={darkTheme}
                    />
                  </InputContainer>

                  <InputContainer>
                    <InputLabel darkTheme={darkTheme}>PASSWORD</InputLabel>
                    <InputField
                      darkTheme={darkTheme}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      value={password}
                      onChange={this.updatePassword}
                    />
                  </InputContainer>

                  <div>
                    <input
                      id="checkbox"
                      type="checkbox"
                      onChange={this.checkPassword}
                      style={{
                        height: '16px',
                        width: '16px',
                      }}
                    />
                    <ShowPasswordLabel htmlFor="checkbox" darkTheme={darkTheme}>
                      Show Password
                    </ShowPasswordLabel>
                  </div>

                  <LoginButton type="submit">Login</LoginButton>
                  <LoginErrorMsg>
                    *Username and Password didn't match
                  </LoginErrorMsg>
                </LoginForm>
              </LoginCard>
            </LoginBg>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
