import { DbpipePipe } from './dbpipe.pipe';

describe('DbpipePipe', () => {
  it('create an instance', () => {
    const pipe = new DbpipePipe();
    expect(pipe).toBeTruthy();
  });
});
