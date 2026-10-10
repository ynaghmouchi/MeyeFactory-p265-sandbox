import assert from 'node:assert/strict';
import { test } from 'node:test';
import { add, subtract } from '../src/math.js';

test('add returns the sum of two numbers', () => {
  assert.equal(add(2, 3), 5);
});

test('subtract returns the difference of two numbers', () => {
  assert.equal(subtract(5, 3), 2);
});

test('subtract throws a TypeError when called with a non-finite input', () => {
  assert.throws(() => subtract('5', 3), TypeError);
  assert.throws(() => subtract(5, NaN), TypeError);
  assert.throws(() => subtract(Infinity, 3), TypeError);
  assert.throws(() => subtract(null, 3), TypeError);
  assert.throws(() => subtract(5, undefined), TypeError);
});

test('subtract does not mutate its inputs and produces no console output', () => {
  const a = 5;
  const b = 3;
  const originalLog = console.log;
  let called = false;
  console.log = () => { called = true; };
  try {
    const result = subtract(a, b);
    assert.equal(result, 2);
    assert.equal(a, 5);
    assert.equal(b, 3);
    assert.equal(called, false);
  } finally {
    console.log = originalLog;
  }
});
