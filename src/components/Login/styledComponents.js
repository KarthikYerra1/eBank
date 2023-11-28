import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-color: #152850;
`
export const LoginDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  background-color: #e0eefe;
  background-size: cover;
  height: 80%;
  width: 70%;
`

export const LoginImage = styled.img`
  height: 80%;
  width: 55%;
`

export const LoginFormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  font-family: 'Roboto';
  border-radius: 20px;
  padding: 15px;
`

export const LoginHeading = styled.h1`
  color: #152850;
  font-weight: bold;
  font-size: 30px;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
`

export const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  margin-bottom: 20px;
`
export const LoginLabel = styled.label`
  font-size: 15px;
  color: #183b56;
  font-weight: 600;
  margin-bottom: 5px;
  margin-left: 3px;
`

export const InputElement = styled.input`
  height: 50px;
  width: 100%;
  outline: none;
  cursor: pointer;
  padding: 10px 15px;
  font-family: 'Roboto';
  border: solid 1px #c3cad9;
  border-radius: 10px;
`

export const LoginButton = styled.button`
  height: 50px;
  padding: 10px;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  border: none;
  border-radius: 10px;
  background-color: #1565d8;
  color: #fff;
  text-align: center;
  margin-top: 15px;
`

export const LoginError = styled.p`
  color: #ff0b37;
  font-size: 12px;
  font-family: 'Roboto';
  margin: 0;
  padding: 0;
  text-align: center;
`
