import { put, call, takeLatest } from 'redux-saga/effects'
import { useAppDispatch } from '../redux/hooks'
import { AppDispatch } from '../redux/store'
import { PositionActionTypes, IPosition, EmployeesActionTypes } from '../types'
import fetchApi from './fetchApi'

function* positionsWorker () {

	const jobs: IPosition[] | Error = yield call(fetchApi, 'jobs')

	if (jobs instanceof Error) {
		yield put({ type: PositionActionTypes.POSITION_ACTION_ERROR, payload: jobs.message })
	}
	else {
		yield put({ type: PositionActionTypes.POSITION_ACTION_FULFILLED, payload: jobs })
	}

}

function* positionsWatcher () {
	yield takeLatest( `${ PositionActionTypes.POSITION_ACTION_PENDING }`, positionsWorker )
}

export default positionsWatcher