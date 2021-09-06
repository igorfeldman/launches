import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as LaunchesActions from "./launches.actions";
import {HttpClient} from "@angular/common/http";
import { of } from "rxjs";
import {ILaunch} from "./launches.model";
import {map, catchError, switchMap, withLatestFrom} from "rxjs/operators"
import { selectLaunches } from "./launches.selectors";

@Injectable()
export class LaunchesEffects {

    loadLaunchesEffect$ = createEffect(() => this.action.pipe(
        ofType<LaunchesActions.RequestLaunchesData>(LaunchesActions.REQUEST_LAUNCHES_DATA),
        withLatestFrom(this.store.select(selectLaunches)),
        switchMap(([, launches]) => {

            // this is avoid a backend call the launches list is already loaded in the store
            if(launches) {
                return of(new LaunchesActions.ReceiveLaunchesDataSuccess({
                    launches: launches
                })); 
            } 
            // Similarly manage the error 
            // else if - there is an error in the store
            // move the reducer to the error state with the error
            // left unimplemented
            else {
                return this.httpClient.get("https://api.spacexdata.com/v3/launches").pipe(
                    map(response => {
                        return new LaunchesActions.ReceiveLaunchesDataSuccess({
                            launches: <ILaunch[]>response
                        });
                    }),
                    catchError(error => {
                        return of(new LaunchesActions.ReceiveLaunchesDataFailure({
                            error: error
                        }));
                    })
                );
            }
        })
    ));

    constructor(private store: Store<any>, private httpClient: HttpClient, private action: Actions) {}
}