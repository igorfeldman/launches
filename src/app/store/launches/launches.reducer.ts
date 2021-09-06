
import * as LaunchesActions from "./launches.actions";
import { ILaunch } from "./launches.model";

export interface ILaunchesState {
    launches: ILaunch[];
    isLaunchesRequesting: boolean;
    error: any;
}

export const LAUNCHES_INITIAL_STATE: ILaunchesState = {
    launches: undefined,
    isLaunchesRequesting: false,
    error: undefined
}

export function launchesReducer(state: ILaunchesState = LAUNCHES_INITIAL_STATE, action: LaunchesActions.Actions) {
    switch(action.type) {
        case LaunchesActions.REQUEST_LAUNCHES_DATA:
            return {
                ...state,
                isLaunchesRequesting: true
            }

        case LaunchesActions.RECEIVE_LAUNCHES_DATA_SUCCESS:
            return {
                ...state,
                launches: action.payload.launches,
                isLaunchesRequesting: false,
                error: undefined
            }

        case LaunchesActions.RECEIVE_LAUNCHES_DATA_FAILURE:
            return {
                ...state,
                isLaunchesRequesting: false,
                error: action.payload.error,
            }
        default:
            return state;
    }
}