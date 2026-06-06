import { extractElementSizes } from './extractElementSizes';

describe('extractElementSizes()', () => {
  it('returns correct sizes', () => {
    const element = '<svg width="10" height="20" />';
    const result = extractElementSizes(element);
    expect(result).toEqual({ width: 10, height: 20 });
  });

  it('returns 0 for missing width', () => {
    const element = '<svg height="20" />';
    const result = extractElementSizes(element);
    expect(result).toEqual({ width: 0, height: 20 });

    const element2 = '<svg />';
    const result2 = extractElementSizes(element2);
    expect(result2).toEqual({ width: 0, height: 0 });

    const element3 = '<svg width="10" />';
    const result3 = extractElementSizes(element3);
    expect(result3).toEqual({ width: 10, height: 0 });
  });

  it('ignores suffixed attributes such as stroke-width', () => {
    const element = '<svg stroke-width="2" width="100" height="50" />';
    expect(extractElementSizes(element)).toEqual({ width: 100, height: 50 });
  });
});
