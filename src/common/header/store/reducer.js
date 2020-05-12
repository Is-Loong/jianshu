import * as constants from './constants'
import { fromJS } from 'immutable' //引入 immutable，一个js库，保护不可更改的数据

//sotre 中的数据是不可更改的，防止被更改
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1,
})

// reducer 中必需导出函数
export default (state = defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        //这里不是修改值，而是结合之前的值返回一个全新的对象
        return state.set('focused', true)
    } else if (action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false)
    } else if (action.type === constants.CHANG_LIST) {
        return state.merge({ list: action.data, totalPage: action.totalPage })
    } else if (action.type === constants.MOUSE_ENTER) {
        return state.set('mouseIn', true)
    } else if (action.type === constants.MOUSE_LEAVE) {
        return state.set('mouseIn', false)
    } else if (action.type === constants.CHANG_PAGE) {
        return state.set('page', action.page)
    }
    return state
}