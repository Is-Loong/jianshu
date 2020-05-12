import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

//获取常量
export const searchFocus = () => ({ type: constants.SEARCH_FOCUS })
export const searchBlur = () => ({ type: constants.SEARCH_BLUR })
export const mouseEnter = () => ({ type: constants.MOUSE_ENTER })
export const mouseLeave = () => ({ type: constants.MOUSE_LEAVE })
export const changPage = (page) => ({ type: constants.CHANG_PAGE, page: page })

const changeList = (data) => ({
    type: constants.CHANG_LIST,
    data: fromJS(data), //下面的异步操作会把数据发送到 ./reducer（里面的数据是immutable）
    totalPage: Math.ceil(data.length / 10), //取整，获取页数
})

//这里返回一个函数－－异步操作
export const getList = () => {
    return (dispatch) => {
        axios
            .get('/api/headerList.json')
            .then((res) => {
                const data = res.data
                const action = changeList(data.data)
                dispatch(action) //把数据发送到 ./reducer.js
            })
            .catch((err) => {
                console.log(err)
            })
    }
}