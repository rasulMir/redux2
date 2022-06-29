// redux

import createSagaMiddleware from '@redux-saga/core'
import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import rootSaga from '../sagas/rootSaga';

// store
import positionReducer from './reducers/postionsReducer'
import employeesReducer from './reducers/employeesReducer'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
	reducer: {
		positionReducer,
		employeesReducer,
	},
	middleware: [ ...getDefaultMiddleware(), sagaMiddleware ],
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga)

export default store