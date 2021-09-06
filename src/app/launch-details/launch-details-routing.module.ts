import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchDetailsContainerComponent } from "./launch-details-container/launch-details-container.component";

const routes: Routes = [
  {
    path: '',
    component: LaunchDetailsContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchDetailsRoutingModule { }