import {createStore, combineReducers} from 'redux'
import charactersReducer from './charactersReduser'


const reducers = combineReducers({
    characters: charactersReducer
})

const store = createStore(reducers)

export default store