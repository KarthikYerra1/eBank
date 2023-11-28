import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #152850;
  background-size: cover;
  height: 100vh;
  padding: 20px;
  width: 100%;
`

export const HomeLogoAndLogoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 100%;
  padding: 10px 70px;
  margin-top: 10px;
`
export const HomeLogo = styled.img`
  height: 100%;
`

export const LogoutButton = styled.button`
  height: 40px;
  width: 90px;
  background-color: transparent;
  border: solid 1px #fff;
  color: #fff;
  font-family: 'Roboto';
  padding: 10px;
  cursor: pointer;
  outline: none;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: 'Roboto';
`

export const HomeText = styled.h1`
  color: #fff;
  font-size: 40px;
  font-weight: bold;
`
export const BalanceCardImage = styled.img`
  height: 62%;
  width: 42%;
`
