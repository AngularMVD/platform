import { SafeUrlPipe } from './safe-url.pipe';

describe('SafeUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new SafeUrlPipe(null);
    expect(pipe).toBeTruthy();
  });
});
