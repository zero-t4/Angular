import { DurationPipePipe } from './duration-pipe.pipe';

describe('DurationPipePipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipePipe();
    expect(pipe).toBeTruthy();
  });

  it('test DurationPipePipe should return 1h 40min', () => {
    const pipe = new DurationPipePipe();
    expect(pipe.transform(100)).toBe('1h 40min');
  });

  it('test DurationPipePipe should return 10min', () => {
    const pipe = new DurationPipePipe();
    expect(pipe.transform(10)).toBe('10min');
  });

});
