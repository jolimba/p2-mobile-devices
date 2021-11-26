import React from 'react'
import container from './navigation/RecordNavigator'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import recordsReducer from './store/record-reducer'

const rootReducer = combineReducers({
    records: recordsReducer
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk))

export default function App() {
    return <Provider store={store}>
        {container}
    </Provider>
}