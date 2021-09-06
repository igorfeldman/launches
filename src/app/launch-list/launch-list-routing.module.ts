import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchListContainerComponent } from "./launch-list-container/launch-list-container.component";

const routes: Routes = [
  {
    path: '',
    component: LaunchListContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchListRoutingModule { }