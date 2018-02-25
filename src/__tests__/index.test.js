import { aSimpleTest } from '../index';

test('takes and returns an array', () => {
  const test = [{}, {}, {}];
  const result = aSimpleTest(test);
  expect(result).toEqual(expect.any(Array));
});

test('takes and returns an array', () => {
  const test = [{}, {}, {}];

  expect.assertions(test.length);
  const result = aSimpleTest(test);
  result.forEach(i => {
    expect(i).toHaveProperty('foo', true);
  });
});
