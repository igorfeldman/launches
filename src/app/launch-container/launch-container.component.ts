import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { IState } from 'src/app/store/app-state';
import * as LaunchesActions from "../store/launches/launches.actions";

@Component({
  selector: 'app-launch-container',
  templateUrl: './launch-container.component.html',
  styleUrls: ['./launch-container.component.scss']
})
export class LaunchContainerComponent implements OnInit {

  constructor(private store: Store<IState>) { }

  ngOnInit(): void {
    this.store.dispatch(new LaunchesActions.RequestLaunchesData());
  }

}
