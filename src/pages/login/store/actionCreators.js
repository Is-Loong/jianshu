import axios from 'axios'
import * as constants from './constants'

const changeLogin = (data) => ({
    type: constants.LOGIN,
    login: data,
})

//登入
export const login = (account, pwd) => {
    return (dispatch) => {
        const param = {
            account,
            pwd,
        }
        axios
            .get('/api/login.json', param)
            .then((res) => {
                const data = res.data
                if (data.success) {
                    dispatch(changeLogin(data))
                }
            })
            .catch()
    }
}

//登出
export const logout = () => ({
    type: constants.LOGOUT,
    value: false,
})