import { fromJS } from 'immutable'
import * as constans from './constans'

const defaultState = fromJS({
    title: '',
    content: '',
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case constans.CHANG_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content,
            })
        default:
            return state
    }
}