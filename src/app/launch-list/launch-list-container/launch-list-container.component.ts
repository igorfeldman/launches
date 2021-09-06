import { Component, OnInit } from '@angular/core';
import { IState } from 'src/app/store/app-state';
import { Store } from "@ngrx/store";
import * as LaunchesActions from "../../store/launches/launches.actions";
import { selectLaunches } from "../../store/launches/launches.selectors";
import { Observable } from 'rxjs';
import { ILaunch } from "../../store/launches/launches.model";
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-launch-list-container',
  templateUrl: './launch-list-container.component.html',
  styleUrls: ['./launch-list-container.component.scss']
})
export class LaunchListContainerComponent implements OnInit {

  launches$: Observable<ILaunch[]>;

  constructor(private store: Store<IState>) { }

  ngOnInit(): void {
    this.launches$ = this.store.select(selectLaunches);

    this.store.dispatch(new LaunchesActions.RequestLaunchesData());
  }

  getLaunchSuccessLabel(launch: ILaunch) {
    return (launch.launch_success) ? "SUCCESSFUL" : "FAILURE";
  }

  getFormattedDate(launch: ILaunch) {
    return moment(launch.launch_date_utc)?.tz('GMT').format("ddd, DD MMM YYYY HH:mm:ss zz");
  }

}
