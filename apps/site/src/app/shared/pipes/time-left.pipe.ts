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

    if (diff.years) {
      return diff.years === 1 ? '1 año' : `${Math.ceil(diff.years)} años`;
    } else if (diff.months) {
      return diff.months === 1 ? '1 mes' : `${Math.ceil(diff.months)} meses`;
    } else if (diff.weeks) {
      return diff.weeks === 1 ? '1 semana' : `${Math.ceil(diff.weeks)} semanas`;
    } else if (diff.days) {
      return diff.days === 1 ? '1 día' : `${Math.ceil(diff.days)} días`;
    } else if (diff.hours) {
      return diff.hours === 1 ? '1 hora' : `${Math.ceil(diff.hours)} horas`;
    } else if (diff.minutes) {
      return diff.minutes === 1
        ? '1 minuto'
        : `${Math.ceil(diff.minutes)} minutos`;
    } else {
      return 'pocos segundos';
    }
  }
}
