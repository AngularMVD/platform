import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('./home/home.module').then((m) => m.HomeModule),
        },
        {
          path: 'events/:date',
          loadChildren: () =>
            import('./event/event.module').then((m) => m.EventModule),
        },
        {
          path: 'events',
          loadChildren: () =>
            import('./events/events.module').then((m) => m.EventsModule),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
    ScullyLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
