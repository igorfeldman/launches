import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchContainerComponent } from './launch-container/launch-container.component';
import { LaunchDetailsModule } from "./launch-details/launch-details.module";
import { LaunchListModule } from "./launch-list/launch-list.module";

// LaunchContainer route is added in order to avoid dispatching the action from app.component
const routes: Routes = [
  {
    path: '',
    component: LaunchContainerComponent,
    children: [
        {
          path: '',
          loadChildren: () => LaunchListModule,
        },
        {
          path: 'details/:id',
          loadChildren: () => LaunchDetailsModule,
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}