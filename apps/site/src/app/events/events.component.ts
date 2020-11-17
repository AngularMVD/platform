import { Component } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'site-events',
  templateUrl: './events.component.html',
  styles: [],
})
export class EventsComponent {
  constructor(private scully: ScullyRoutesService) {}
}
