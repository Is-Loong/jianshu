import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { actionCreators } from './store'

class Login extends PureComponent {
  render() {
    console.log(this.props.logins, 'this.props.login')
    if (!this.props.logins) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="帐号"
              ref={(input) => {
                this.account = input
                console.log(this.account, 'lll')
              }}
            />
            <Input
              placeholder="密码"
              type="password"
              ref={(input) => {
                this.pwd = input
              }}
            />
            <Button onClick={() => this.props.login(this.account, this.pwd)}>登&nbsp;&nbsp;录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/" />
    }
  }
}

const mapState = (state) => ({
  logins: state.getIn(['login', 'login']),
})

const mapAction = (dispatch) => ({
  login(accountElement, pwdElement) {
    if (!accountElement || !pwdElement.value) {
      alert('请输入！！')
      return
    }
    dispatch(actionCreators.login(accountElement.value, pwdElement.value))
  },
})

export default connect(mapState, mapAction)(Login)
