import { ActionReducerMap, Action } from "@ngrx/store";
import { LaunchesEffects } from "./launches/launches.effects";
import { ILaunchesState, launchesReducer } from "./launches/launches.reducer";

export const reducers: ActionReducerMap<IState, any> = {
    launchesState: launchesReducer
};

export interface IState {
    launchesState: ILaunchesState
}

export const effects = [LaunchesEffects];