import assert from 'node:assert/strict';
import { test } from 'node:test';
import { add } from '../src/math.js';

test('add returns the sum of two numbers', () => {
  assert.equal(add(2, 3), 5);
});

test('add throws a TypeError when given a non-finite input', () => {
  assert.throws(() => add(Infinity, 1), TypeError);
  assert.throws(() => add(1, NaN), TypeError);
  assert.throws(() => add('2', 3), TypeError);
  assert.throws(() => add(null, 3), TypeError);
  assert.throws(() => add(2, undefined), TypeError);
});
