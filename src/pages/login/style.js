import styled from 'styled-components'

export const LoginWrapper = styled.div `
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 58px;
  background: #eee;
`

export const LoginBox = styled.div `
  width: 400px;
  height: 180px;
  margin: 60px auto;
  padding-top: 10px;
  background: #fff;
  box-shadow: 0 0 8px rgb(140, 140, 140);
`

export const Input = styled.input `
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  color: #777;
  margin: 20px auto;
`

export const Button = styled.div `
  width: 220px;
  height: 30px;
  line-height: 30px;
  background: #3194d0;
  text-align: center;
  border-radius: 15px;
  margin: 20px auto;
  color: #fff;
  cursor: pointer;
`