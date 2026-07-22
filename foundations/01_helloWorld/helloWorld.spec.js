const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('pass', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
