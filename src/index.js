console.log({ ...{ hi: 'there' }, you: 'person' }); // eslint-disable-line no-console

function transform(item) {
  return {
    ...item,
    foo: true,
  };
}

// eslint-disable-next-line import/prefer-default-export
export function aSimpleTest(arr) {
  return arr.map(transform);
}
