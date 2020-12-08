import { TimeLeftPipe } from './time-left.pipe';

describe('TimeLeftPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeLeftPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return "30 minutos" if date provided is 30 minutes after', () => {
    // arrange
    const date = new Date(Date.now());
    date.setMinutes(date.getMinutes() + 30);
    const pipe = new TimeLeftPipe();
    // act
    const response = pipe.transform(date);
    // assert
    expect(response).toBe('30 minutos');
  });

  it('should return "12 horas" if date provided is 12 hours after', () => {
    // arrange
    const date = new Date(Date.now());
    date.setHours(date.getHours() + 12);
    const pipe = new TimeLeftPipe();
    // act
    const response = pipe.transform(date);
    // assert
    expect(response).toBe('12 horas');
  });

  it('should return "6 dias" if date provided is 6 days after', () => {
    // arrange
    const date = new Date(Date.now());
    date.setDate(date.getDate() + 6);
    const pipe = new TimeLeftPipe();
    // act
    const response = pipe.transform(date);
    // assert
    expect(response).toBe('6 días');
  });

  it('should return "12 dias" if date provided is 12 days after', () => {
    // arrange
    const date = new Date(Date.now());
    date.setDate(date.getDate() + 12);
    const pipe = new TimeLeftPipe();
    // act
    const response = pipe.transform(date);
    // assert
    expect(response).toBe('12 días');
  });

  it('should return "3 semanas" if date provided is 25 days after', () => {
    // arrange
    const date = new Date(Date.now());
    date.setDate(date.getDate() + 25);
    const pipe = new TimeLeftPipe();
    // act
    const response = pipe.transform(date);
    // assert
    expect(response).toBe('3 semanas');
  });

  it('should return "3 meses" if date provided is 100 days after', () => {
    // arrange
    const date = new Date(Date.now());
    date.setDate(date.getDate() + 100);
    const pipe = new TimeLeftPipe();
    // act
    const response = pipe.transform(date);
    // assert
    expect(response).toBe('3 meses');
  });
});
