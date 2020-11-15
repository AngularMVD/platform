import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { EventsComponent } from './events.component';

@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':date',
        component: EventsComponent,
      },
    ]),
    ScullyLibModule,
  ],
})
export class EventsModule {}
