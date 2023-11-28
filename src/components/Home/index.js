import Cookies from 'js-cookie'

import {
  HomeContainer,
  HomeLogoAndLogoutContainer,
  HomeLogo,
  LogoutButton,
  CardContainer,
  HomeText,
  BalanceCardImage,
} from './styledComponents'

const Home = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <HomeContainer>
      <HomeLogoAndLogoutContainer>
        <HomeLogo
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <LogoutButton type="button" onClick={onClickLogout}>
          Logout
        </LogoutButton>
      </HomeLogoAndLogoutContainer>
      <CardContainer>
        <HomeText>Your Flexibility, Our Excellence</HomeText>
        <BalanceCardImage
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </CardContainer>
    </HomeContainer>
  )
}

export default Home
