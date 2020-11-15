import { Component, ViewEncapsulation } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';

declare var ng: any;

@Component({
  selector: 'site-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class EventsComponent {
  event$ = this.scully.getCurrent();

  constructor(private scully: ScullyRoutesService) {}
}
