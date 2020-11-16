import { Component, ViewEncapsulation } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

import { Event } from '../core/classes/event.class';

declare var ng: any;

@Component({
  selector: 'site-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class EventComponent {
  event$ = this.scully
    .getCurrent()
    .pipe(map((eventMarkdown) => Event.fromMarkdown(eventMarkdown)));

  constructor(private scully: ScullyRoutesService) {}
}
