import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchDetailsRoutingModule } from './launch-details-routing.module';
import { LaunchDetailsContainerComponent } from './launch-details-container/launch-details-container.component';

@NgModule({
  imports: [
    LaunchDetailsRoutingModule,
    CommonModule,
  ],
  declarations: [LaunchDetailsContainerComponent]
})
export class LaunchDetailsModule { }