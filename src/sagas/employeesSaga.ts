import { put, call, takeLatest } from 'redux-saga/effects'
import { EmployeesActionTypes, IEmployee } from '../types'
import fetchApi from './fetchApi'


function* employeesWorker () {

	const employees: IEmployee[] | Error = yield call(fetchApi, 'employees')
	
	if (employees instanceof Error) {
		yield put({ type: EmployeesActionTypes.EMPLOYEES_ACTION_ERROR, payload: employees.message })
	}
	else {
		yield put({ type: EmployeesActionTypes.EMPLOYEES_ACTION_FULFILLED, payload: employees })
	}

}

function* employeesWatcher () {
	yield takeLatest( `${EmployeesActionTypes.EMPLOYEES_ACTION_PENDING}`, employeesWorker )
}

export default employeesWatcher