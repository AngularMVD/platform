import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SafeUrlPipe, FooterComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [SafeUrlPipe, FooterComponent],
})
export class SharedModule {}
