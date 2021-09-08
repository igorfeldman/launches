import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as LaunchesActions from "./launches.actions";
import {HttpClient} from "@angular/common/http";
import { of } from "rxjs";
import {ILaunch} from "./launches.model";
import {map, catchError, switchMap} from "rxjs/operators"

@Injectable()
export class LaunchesEffects {

    loadLaunchesEffect$ = createEffect(() => this.action.pipe(
        ofType<LaunchesActions.RequestLaunchesData>(LaunchesActions.REQUEST_LAUNCHES_DATA),
        switchMap(() => {
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
        })
    ));

    constructor(private store: Store<any>, private httpClient: HttpClient, private action: Actions) {}
}