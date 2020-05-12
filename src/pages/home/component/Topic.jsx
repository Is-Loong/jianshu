import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style'

class Topic extends PureComponent {
  render() {
    return (
      <TopicWrapper>
        {/** list 从redux中取出来的是 immutable 对象，要使用 get  */}
        {this.props.list.map((item) => {
          return (
            <TopicItem key={item.get('id')}>
              <img src={require(`../../../${item.get('imgUrl')}`)} alt={item.get('title')} />
              {item.get('title')}
            </TopicItem>
          )
        })}
      </TopicWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'topicList']), //获取 redux 中的值
})

export default connect(mapState, null)(Topic)
