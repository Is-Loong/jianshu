import axios from 'axios'
import { fromJS } from 'immutable'
import * as constants from './constants'

const changeHomeData = (data) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: data.topicList,
    artitleList: data.artitleList,
    recommendList: data.recommendList,
})

const addHomeList = (data, nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(data),
    nextPage,
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios
            .get('/api/home.json')
            .then((res) => {
                const data = res.data.data
                const action = changeHomeData(data)
                dispatch(action) //发送数据
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios
            .get('/api/homeList.json?page=' + page)
            .then((res) => {
                const data = res.data.data
                    //console.log(data, 'data')
                dispatch(addHomeList(data, page + 1)) //发送数据
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show: show,
})