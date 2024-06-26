import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
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
  state = {
    showPassword: false,
    username: '',
    password: '',
    errorMsg: '',
    showErrorMsg: false,
  }

  checkPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  updateUsername = event => {
    this.setState({username: event.target.value})
  }

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {method: 'POST', body: JSON.stringify(userDetails)}

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onSubmitSuccess = jwtToken => {
    console.log(jwtToken)
    this.setState({showErrorMsg: false})
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg, username: '', password: ''})
  }

  render() {
    const {
      showPassword,
      password,
      errorMsg,
      showErrorMsg,
      username,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

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
                <LoginForm darkTheme={darkTheme} onSubmit={this.submitForm}>
                  <InputContainer>
                    <InputLabel darkTheme={darkTheme}>USERNAME</InputLabel>
                    <InputField
                      type="text"
                      placeholder="Username"
                      darkTheme={darkTheme}
                      value={username}
                      onChange={this.updateUsername}
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
                  {showErrorMsg && <LoginErrorMsg>*{errorMsg}</LoginErrorMsg>}
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
