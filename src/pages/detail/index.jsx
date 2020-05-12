import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom' //路由中使用了异步加载
import { connect } from 'react-redux'
import { Content, DetailWrapper, Header } from './style'
import * as actionCreators from './store/actionCreators'

class Detail extends PureComponent {
  render() {
    const { title, content } = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        {/**转义 */}
        <Content dangerouslySetInnerHTML={{ __html: content }}></Content>
        <img src={require('../../static/img/glass.webp')} alt="" />
      </DetailWrapper>
    )
  }

  componentDidMount() {
    //取参
    this.props.getDetail(this.props.match.params.id)
  }
}

const mapState = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
  }
}

const mapAction = (dispatch) => {
  return {
    getDetail(id) {
      dispatch(actionCreators.getDetail(id))
    },
  }
}

//withRouter(Detail) 表示detail可以获取到路由中的值（因为app.js中引用的detail使用的是loadable.js）
export default connect(mapState, mapAction)(withRouter(Detail))
