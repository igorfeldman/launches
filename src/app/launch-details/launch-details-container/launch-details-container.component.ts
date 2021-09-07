import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILaunch } from 'src/app/store/launches/launches.model';
import { IState } from 'src/app/store/app-state';
import { Store } from "@ngrx/store";
import {selectLaunches} from "../../store/launches/launches.selectors";
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

AutoUnsubscribe()
@Component({
  selector: 'app-launch-details-container',
  templateUrl: './launch-details-container.component.html',
  styleUrls: ['./launch-details-container.component.scss']
})
export class LaunchDetailsContainerComponent implements OnInit , OnDestroy {

  launch: ILaunch;

  constructor(private route: ActivatedRoute, private store: Store<IState>) { }

  ngOnInit(): void {
    this.store.select(selectLaunches).subscribe(launches => {
        this.launch = launches?.find(item => item.flight_number === Number(this.route.snapshot.paramMap.get("id")));
    });
  }

  getReusedValue() {
    return this.launch?.rocket?.fairings?.reused ? "Yes" : "No";
  }

  // AutoUnsubscribe requires this hook to exist
  ngOnDestroy() {}

}
