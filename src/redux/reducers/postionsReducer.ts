import { IPostitionInitialState, TAction, PositionActionTypes, IPosition } from "../../types"

const initialState: IPostitionInitialState = {
	positions: [],
	loading: false,
	error: false,
	errorTxt: '',
}


function positionReducer(state = initialState, action: TAction): IPostitionInitialState {

	switch (action.type) {
		case PositionActionTypes.POSITION_ACTION_PENDING: {
			return { ...state, loading: true, error: false };
			break;
		}

		case PositionActionTypes.POSITION_ACTION_ERROR: {
			return { ...state, loading: false, error: true, errorTxt: action.payload };
			break;
		}

		case PositionActionTypes.POSITION_ACTION_FULFILLED: {
			return { ...state, loading: false, error: false, positions: action.payload };
			break;
		}
	
		default:
			return state;
			break;
	}
}

export default positionReducer;