const test = require('node:test');
const assert = require('node:assert/strict');
const { getGreeting } = require('./index');

test('returns the required greeting', () => {
  assert.equal(getGreeting(), 'Hello from Node.js!');
});
