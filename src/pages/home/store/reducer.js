import { fromJS } from 'immutable' //保持数据不能更改
import * as constants from './constants'

const defaultState = fromJS({
    topicList: [],
    artitleList: [],
    recommendList: [],
    page: 1,
    showScroll: false,
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList), //转成 immutable 对象
                artitleList: fromJS(action.artitleList),
                recommendList: fromJS(action.recommendList),
            })
        case constants.ADD_ARTICLE_LIST:
            return state.merge({
                artitleList: state.get('artitleList').concat(action.list),
                page: action.nextPage,
            })
        case constants.TOGGLE_SCROLL_TOP:
            return state.merge({ showScroll: action.show })
        default:
            return state
    }
}