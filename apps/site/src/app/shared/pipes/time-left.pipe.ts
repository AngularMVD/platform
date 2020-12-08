import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'timeLeft',
})
export class TimeLeftPipe implements PipeTransform {
  transform(value: Date) {
    const diff = DateTime.fromISO(value.toISOString()).diffNow([
      'years',
      'months',
      'weeks',
      'days',
      'hours',
      'minutes',
    ]);

    if (diff.years && diff.years > 1) {
      return `${Math.ceil(diff.years)} años`;
    } else if (diff.months && diff.months > 1) {
      return `${Math.ceil(diff.months)} meses`;
    } else if (diff.weeks && diff.weeks > 1) {
      return `${Math.ceil(diff.weeks)} semanas`;
    } else if (diff.days && diff.days > 1) {
      return `${Math.ceil(diff.days + diff.weeks * 7)} días`;
    } else if (diff.hours && diff.hours > 1) {
      return `${Math.ceil(diff.hours)} horas`;
    } else if (diff.minutes && diff.minutes > 1) {
      return `${Math.ceil(diff.minutes)} minutos`;
    } else {
      return 'unos segundos';
    }
  }
}
