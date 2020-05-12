import axios from 'axios'
import * as constans from './constans'

const changDetail = (action) => ({
    type: constans.CHANG_DETAIL,
    title: action.title + action.id,
    content: action.content,
})

export const getDetail = (id) => {
    return (dispatch) => {
        axios
            .get('/api/detail.json?id=' + id)
            .then((res) => {
                const data = res.data.data
                data.id = id
                dispatch(changDetail(data))
            })
            .catch()
    }
}