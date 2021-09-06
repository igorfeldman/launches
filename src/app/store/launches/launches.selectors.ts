import {IState} from "../app-state";

export const selectLaunches = (state: IState) => state.launchesState.launches;