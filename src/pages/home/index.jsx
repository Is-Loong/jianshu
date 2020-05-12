import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { HomeWrapper, HomeRight, HomeLeft } from './style'
import banner from '../../static/img/book.jpg'

import { actionCreators } from './store' //引用的 index.js

//引用组件
import List from './component/List'
import Recommend from './component/Recommend'
import Topic from './component/Topic'
import Writer from './component/Writer'
import { BackTop } from './style'

class Home extends PureComponent {
  //回到顶部
  handleScrollTop = () => {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src={banner} alt="banner" />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
      </HomeWrapper>
    )
  }

  //绑定滚动事件
  bindEvents = () => {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  //销毁
  componentWillUnmount() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  //生命周期
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }
}

//是否滚动到顶部
const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll']),
})

//发送
const mapDispatch = (dispatch) => {
  return {
    changeHomeData() {
      const action = actionCreators.getHomeInfo()
      dispatch(action)
    },
    changeScrollTopShow() {
      const top = document.documentElement.scrollTop

      if (top > 100) {
        dispatch(actionCreators.toggleTopShow(true))
      } else {
        dispatch(actionCreators.toggleTopShow(false))
      }
    },
  }
}

export default connect(mapState, mapDispatch)(Home)
