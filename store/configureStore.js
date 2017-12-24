import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Reducer from '../reducers'

const configureStore = (initialState) => {
  const middleware = applyMiddleware(thunk)

  return createStore(Reducer, initialState, middleware)
}

export default configureStore
