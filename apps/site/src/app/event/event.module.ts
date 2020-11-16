import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { EventComponent } from './event.component';

@NgModule({
  declarations: [EventComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventComponent,
      },
    ]),
    ScullyLibModule,
  ],
})
export class EventModule {}
