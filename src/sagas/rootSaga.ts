import { all } from 'redux-saga/effects'
import employeesWatcher from './employeesSaga'
import positionsWatcher from './positionsSaga'

function* rootSaga () {
	yield all([
		positionsWatcher(),
		employeesWatcher(),
	])
}

export default rootSaga