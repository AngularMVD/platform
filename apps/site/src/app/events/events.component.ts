import { Component } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

import { Event } from '../core/classes/event.class';

@Component({
  selector: 'site-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  events$ = this.scully.available$.pipe(
    map((availableRoutes) =>
      availableRoutes
        .filter((availableRoute) => {
          const urlAsArray = availableRoute.route
            .split('/')
            .filter((segment) => !!segment);
          return urlAsArray.length === 2 && urlAsArray[0] === 'events';
        })
        .map((availableRoute) => Event.fromMarkdown(availableRoute))
    )
  );

  constructor(private scully: ScullyRoutesService) {}
}
