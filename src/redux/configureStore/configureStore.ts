
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import username from '../reducers/login'
import data from '../reducers/getPosts'

const reducer = combineReducers({username: username, posts: data})


export const store = createStore(reducer,applyMiddleware(thunk))



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch