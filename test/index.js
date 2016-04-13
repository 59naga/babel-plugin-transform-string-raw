// dependencies
import assert from 'power-assert';
import { transform } from 'babel-core';
import vm from 'vm';

// target
import plugin from '../lib';

// environment
const options = {
  presets: [
    'es2015',
  ],
  plugins: [
    plugin,
    // regression https://github.com/59naga/babel-plugin-add-module-exports/blob/master/test/index.js#L54
    plugin,
    plugin,
    '@59naga/babel-plugin-transform-array-from',
  ],
};

// fixtures
const data = [
  {
    code: 'String.raw``',
    expected: '',
  },
  {
    code: `
      const arg1 = 'foo';
      const arg2 = 'bar';
      ${'String.raw`hoge${arg1}fuga${arg2}piyo`'}
    `,
    expected: 'hogefoofugabarpiyo',
  },
];

// specs
describe('babel-plugin-transform-string-raw', () => {
  it('should replace to String.raw polyfill', () => {
    data.forEach((test) => {
      const result = transform(test.code, options);
      const returnValue = vm.runInNewContext(result.code);
      assert(returnValue === test.expected);
    });
  });
});
