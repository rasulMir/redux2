
export interface IPostitionInitialState {
	positions: IPosition[];
	loading: boolean;
	error: boolean;
	errorTxt: string;
}

export interface IPosition {
	id: number;
	jobd: string;
	title: string;
}

export enum PositionActionTypes {
	POSITION_ACTION_PENDING = 'POSITION_ACTION_PENDING',
	POSITION_ACTION_FULFILLED = 'POSITION_ACTION_FULFILLED',
	POSITION_ACTION_ERROR = 'POSITION_ACTION_ERROR',
}

export type TPositionsActionPending = {
	type: PositionActionTypes.POSITION_ACTION_PENDING;
}

export type TPositionsActionError = {
	type: PositionActionTypes.POSITION_ACTION_ERROR;
	payload: string;
}

export type TPositionsActionFulfilled = {
	type: PositionActionTypes.POSITION_ACTION_FULFILLED;
	payload: IPosition[];
}

export type TAction = TPositionsActionPending | TPositionsActionError | TPositionsActionFulfilled

export interface IEmployeesInitialState {
	employees: IEmployee[];
	jobsFiltered: IEmployee[];
	loading: boolean;
	error: boolean;
	errorTxt: string;
}

export interface IEmployee {
	id: string;
	createdAt: string;
	avatar: string;
	name: string;
	email: string;
	companyName: string;
	address: string;
	phone: string;
	job: string;
	about: string;
}

export enum EmployeesActionTypes {
	EMPLOYEES_ACTION_PENDING = 'EMPLOYEES_ACTION_PENDING',
	EMPLOYEES_ACTION_FULFILLED = 'EMPLOYEES_ACTION_FULFILLED',
	EMPLOYEES_ACTION_ERROR = 'EMPLOYEES_ACTION_ERROR',
	EMPLOYEES_ACTION_FILTER = 'EMPLOYEES_ACTION_FILTER',
}

export type TEmployeesActionFilter = {
	type: EmployeesActionTypes.EMPLOYEES_ACTION_FILTER
	payload: string;
}

export type TEmployeesActionPending = {
	type: EmployeesActionTypes.EMPLOYEES_ACTION_PENDING
}

export type TEmployeesActionError = {
	type: EmployeesActionTypes.EMPLOYEES_ACTION_ERROR
	payload: string;
}

export type TEmployeesActionFulfilled = {
	type: EmployeesActionTypes.EMPLOYEES_ACTION_FULFILLED
	payload: IEmployee[];
}

export type TEmployeesAction = TEmployeesActionPending | TEmployeesActionError | TEmployeesActionFulfilled | TEmployeesActionFilter

