import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchDetailsModule } from "./launch-details/launch-details.module";
import { LaunchListModule } from "./launch-list/launch-list.module";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => LaunchListModule,
  },
  {
    path: 'details/:id',
    loadChildren: () => LaunchDetailsModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}