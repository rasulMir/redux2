import { IEmployeesInitialState, TEmployeesAction, EmployeesActionTypes } from "../../types"

const initialState: IEmployeesInitialState = {
	employees: [],
	jobsFiltered: [],
	loading: false,
	error: false,
	errorTxt: '',
}


function employeesReducer(state = initialState, action: TEmployeesAction): IEmployeesInitialState {

	switch (action.type) {
		case EmployeesActionTypes.EMPLOYEES_ACTION_PENDING: {
			return { ...state, loading: true, error: false };
			break;
		}

		case EmployeesActionTypes.EMPLOYEES_ACTION_FILTER: {
			const filtered = state.employees.filter(i => (i.job === action.payload))
			return { ...state, jobsFiltered: filtered };
			break;
		}

		case EmployeesActionTypes.EMPLOYEES_ACTION_ERROR: {
			return { ...state, loading: false, error: true, errorTxt: action.payload };
			break;
		}

		case EmployeesActionTypes.EMPLOYEES_ACTION_FULFILLED: {
			return { ...state, loading: false, error: false, employees: action.payload };
			break;
		}
	
		default:
			return state;
			break;
	}
}

export default employeesReducer;