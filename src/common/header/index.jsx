import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
//自定义组件
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper, Addition, Button, SearchInfo, SearchInfoItem, SearchInfoList, SearchInfoSwitch, SearchInfoTitle } from './style.js'
//引入动画组件
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
// 引入登录中的reduer.js
import { actionCreators as logoutActionCreators } from '../../pages/login/store'

class Header extends PureComponent {
  //输入框 是否显示热搜
  showListArea = () => {
    const { focused, list, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handleChangPage } = this.props
    const newList = list.toJS() //immutable数据转成普通数据
    const pageList = []
    //显示每页的数据
    if (newList.length > 0) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(<SearchInfoItem key={newList[i] + '_' + i}>{newList[i]}</SearchInfoItem>)
      }
    }
    //搜索面板，鼠标移除时才隐藏
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热搜搜索
            <SearchInfoSwitch onClick={() => handleChangPage(page, totalPage, this.spinIcon)}>
              {/** 制作动画效果 通过ref获取dom */}
              <i
                ref={(icon) => {
                  this.spinIcon = icon
                }}
                className="iconfont spin">
                &#xe71e;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          {/**是否登录 */}
          {this.props.login ? (
            <NavItem className="right" onClick={this.props.logout}>
              退出
            </NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>
          )}
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            {/** 动画属性 */}
            <CSSTransition in={this.props.focused} timeout={200} classNames="slide">
              <NavSearch className={this.props.focused ? 'focused' : ''} onFocus={() => this.props.handleInputFocuse(this.props.list)} onBlur={this.props.handleInputBlur}></NavSearch>
            </CSSTransition>
            <i title="搜索" className={this.props.focused ? 'iconfont focused zoom' : 'iconfont zoom'}>
              &#xe62b;
            </i>
            {this.showListArea(this.props.focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe61d;</i>写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

/**
 *
 * 连接store
 */
const mapStateToProps = (state) => {
  return {
    //返回 store 中的 值，页面中通过 this.props.focused 取
    // state 是一个immutable对象
    //state.get('header').get('focused'), //值来源 src/store/reducer
    focused: state.getIn(['header', 'focused']), //取值第二种方式
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login']), //取登录的值
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocuse(list) {
      list.size === 0 && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus()) //发送到 src/store/reducer
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur()) //发送到 src/store/reducer
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter()) //发送到 src/store/reducer
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave()) //发送到 src/store/reducer
    },
    handleChangPage(page, totalPage, spin) {
      //console.log(spin, spin.style.transform)
      //把非数字的替换成空
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10) //按十进制的方式转化成数字
      } else {
        originAngle = 0
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
      //发送页数
      if (page < totalPage) {
        dispatch(actionCreators.changPage(page + 1))
      } else {
        dispatch(actionCreators.changPage(1))
      }
    },
    logout() {
      //向login/reducer.js 中发送 退出登录
      dispatch(logoutActionCreators.logout())
      alert('已经退出登录！！')
    },
  }
}

//通过这两个函数建立 header 与 store 的连接
export default connect(mapStateToProps, mapDispatchToProps)(Header)
