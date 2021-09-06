
import { Action } from '@ngrx/store';
import { ILaunch } from './launches.model';

export const REQUEST_LAUNCHES_DATA = 'REQUEST_LAUNCHES_DATA';
export const RECEIVE_LAUNCHES_DATA_SUCCESS = 'RECEIVE_LAUNCHES_DATA_SUCCESS';
export const RECEIVE_LAUNCHES_DATA_FAILURE = 'RECEIVE_LAUNCHES_DATA_FAILURE';

export class RequestLaunchesData implements Action {
  readonly type = REQUEST_LAUNCHES_DATA;
}

export class ReceiveLaunchesDataSuccess implements Action {
    readonly type = RECEIVE_LAUNCHES_DATA_SUCCESS;

    constructor(public payload: { 
        launches: ILaunch[]
    }) {}
}

export class ReceiveLaunchesDataFailure implements Action {
    readonly type = RECEIVE_LAUNCHES_DATA_FAILURE;

    constructor(public payload: { 
        error: any
    }) {}
}

export type Actions = RequestLaunchesData | ReceiveLaunchesDataSuccess | ReceiveLaunchesDataFailure;