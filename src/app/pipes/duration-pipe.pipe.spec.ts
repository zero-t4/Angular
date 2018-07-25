import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('test DurationPipe should return 1h 40min', () => {
    const pipe = new DurationPipe();
    expect(pipe.transform(100)).toBe('1h 40min');
  });

  it('test DurationPipe should return 10min', () => {
    const pipe = new DurationPipe();
    expect(pipe.transform(10)).toBe('10min');
  });

});
