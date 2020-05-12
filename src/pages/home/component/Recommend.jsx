import React, { PureComponent } from 'react'
import { RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux'

class Recommend extends PureComponent {
  render() {
    return (
      <RecommendWrapper>
        {this.props.list.map((item) => {
          return <RecommendItem key={item.get('id')} imgUrl={require(`../../../${item.get('imgUrl')}`)}></RecommendItem>
        })}
      </RecommendWrapper>
    )
  }
}
const mapState = (state) => {
  return {
    list: state.getIn(['home', 'recommendList']),
  }
}
export default connect(mapState, null)(Recommend)
