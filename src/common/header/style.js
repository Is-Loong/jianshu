import styled from 'styled-components'
import logoPic from '../../static/logo.png' //引入图片

export const HeaderWrapper = styled.div `
  position: relative;
  z-index: 1;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`

// attrs 添加跳转url
//单页面应用跳转 Link, as标签跳转倒重新加载页面
//export const Logo = styled.a.attrs({ href: '/' })
export const Logo = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  height: 56px;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div `
  height: 100%;
  width: 960px;
  padding: 0 70px;
  box-sizing: border-box;
  margin: 0 auto;
`

//&.left 当前的这个组件上的类名－left
export const NavItem = styled.div `
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`

//.zoom 当前组件的子元素类名
export const SearchWrapper = styled.div `
  position: relative;
  float: left;

  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    cursor: pointer;

    &.focused {
      background-color: #777;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索',
})
`
  width: 160px;
  height: 38px;
  padding: 0 40px 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  margin-top: 9px;
  border: none;
  outline: none;
  border-radius: 19px;
  background-color: #eee;

  &.focused {
    width: 240px;
  }

  &.sc-AxgMl {
    transition: width 1s;
    -webkit-transition: width 1s;
  }

  &.slide-enter-done {
    width: 240px;
  }

  &.slide-exit-done {
    width: 160px;
  }
`
export const SearchInfo = styled.div `
  position: absolute;
  left: 0;
  top: 58px;
  width: 240px;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`

export const SearchInfoTitle = styled.div `
  margin: 20px 0;
  line-heigt: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span `
  float: right;
  font-size: 13px;
  cursor: pointer;

  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 5px;
    margin-top: 4px;
    transform: rotate(0deg);
    transition: all 1s ease-in;
    transform-origin: center center;
  }
`

export const SearchInfoList = styled.div `
  overflow: hidden;
`

export const SearchInfoItem = styled.a `
  display: inline-block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  cursor: pointer;
`

export const Addition = styled.div `
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`
const pointer = 'cursor:pointer'
export const Button = styled.div `
  float: right;
  margin: 9px 20px 0 0;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid rgba(236, 97, 73, 0.7);

  &.reg {
    ${pointer};
    color: #ea6f5a;
  }
  &.writting {
    ${pointer};
    color: #fff;
    background-color: #ea6f5a;
  }
`