import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import orders from './orders'
import cartReducer from './cartReducer'
import hat from './hat'
import singleHatReducer from './singleHatReducer'

const reducer = combineReducers({user, hat, orders, singleHatReducer, cartReducer})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './hat'
export * from './orders'
