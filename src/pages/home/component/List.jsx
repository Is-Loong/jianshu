import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListItem, ListInfo, LoadMore } from '../style'
import { actionCreators } from '../store'

class List extends PureComponent {
  render() {
    return (
      <div>
        {this.props.list.map((item, index) => {
          return (
            <Link to={'/detail/' + item.get('id')}>
              <ListItem key={item.get('id') + index}>
                <img className="pic" src={require(`../../../${item.get('imgUrl')}`)} alt={item.get('title')} />
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
          )
        })}
        <LoadMore
          onClick={() => {
            this.props.getMoreList(this.props.page)
          }}>
          更多文字
        </LoadMore>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'artitleList']),
    page: state.getIn(['home', 'page']),
  }
}

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  },
})

export default connect(mapState, mapDispatch)(List)
