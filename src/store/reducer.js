//import { combineReducers } from 'redux'
//换成下面的 immutable 对象，为了和 header/store/reducer.js 统一起来
import { combineReducers } from 'redux-immutable'
//获取 store 下 index.js 中的输出，这里是拆分每个小的 reducer
import { reducer as headerReducer } from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store'
import { reducer as loginReducer } from '../pages/login/store'

//合并引进的模块 reducer
const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer,
})

export default reducer