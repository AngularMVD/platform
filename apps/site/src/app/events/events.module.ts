import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EventsComponent } from './events.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: EventsComponent }]),
  ],
})
export class EventsModule {}
