import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FooterComponent } from './components/footer/footer.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { TimeLeftPipe } from './pipes/time-left.pipe';

@NgModule({
  declarations: [SafeUrlPipe, FooterComponent, TimeLeftPipe],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [SafeUrlPipe, FooterComponent, TimeLeftPipe],
})
export class SharedModule {}
