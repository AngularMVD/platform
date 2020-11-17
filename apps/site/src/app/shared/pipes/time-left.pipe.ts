import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'timeLeft',
})
export class TimeLeftPipe implements PipeTransform {
  transform(value: Date) {
    const diff = DateTime.fromISO(value.toISOString()).diffNow([
      'months',
      'weeks',
      'days',
      'hours',
      'minutes',
    ]);

    if (diff.months) {
      return `${diff.months} ${diff.months === 1 ? 'mes' : 'meses'}`;
    } else if (diff.weeks) {
      return `${diff.weeks} ${diff.weeks === 1 ? 'semana' : 'semanas'}`;
    } else if (diff.days) {
      return `${diff.days} ${diff.days === 1 ? 'día' : 'días'}`;
    } else if (diff.hours) {
      return `${diff.hours} ${diff.hours === 1 ? 'hora' : 'horas'}`;
    } else if (diff.minutes) {
      return `${diff.minutes} ${diff.minutes === 1 ? 'minuto' : 'minutos'}`;
    } else {
      return 'unos segundos';
    }
  }
}
