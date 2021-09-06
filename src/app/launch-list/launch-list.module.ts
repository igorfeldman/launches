import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchListRoutingModule } from './launch-list-routing.module';
import { LaunchListContainerComponent } from './launch-list-container/launch-list-container.component';

@NgModule({
  imports: [
    LaunchListRoutingModule,
    CommonModule,
  ],
  declarations: [LaunchListContainerComponent]
})
export class LaunchListModule { }