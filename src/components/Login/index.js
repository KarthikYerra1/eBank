import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import {
  LoginContainer,
  LoginDetailsContainer,
  LoginImage,
  LoginFormContainer,
  LoginHeading,
  LoginInputContainer,
  LoginLabel,
  InputElement,
  LoginButton,
  LoginError,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  getUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <LoginLabel htmlFor="username">User ID</LoginLabel>
        <InputElement
          placeholder="Enter User ID"
          value={username}
          onChange={this.onChangeUsername}
          type="text"
          id="username"
        />
      </>
    )
  }

  getPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <LoginLabel htmlFor="password">PIN</LoginLabel>
        <InputElement
          placeholder="Enter PIN"
          value={password}
          onChange={this.onChangePassword}
          type="password"
          id="password"
        />
      </>
    )
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const loginDetails = {user_id: username, pin: password}
    const apiUrl = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(loginDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {errorMsg, showErrorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <LoginDetailsContainer>
          <LoginImage
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
          <LoginFormContainer onSubmit={this.onSubmitLogin}>
            <LoginHeading>Welcome Back</LoginHeading>
            <LoginInputContainer>{this.getUsernameField()}</LoginInputContainer>
            <LoginInputContainer>{this.getPasswordField()}</LoginInputContainer>
            <LoginButton type="submit">Login</LoginButton>
            {showErrorMsg && <LoginError>{errorMsg}</LoginError>}
          </LoginFormContainer>
        </LoginDetailsContainer>
      </LoginContainer>
    )
  }
}

export default Login
