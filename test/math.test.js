import assert from 'node:assert/strict';
import { test } from 'node:test';
import { add, subtract, multiply } from '../src/math.js';

test('add returns the sum of two numbers', () => {
  assert.equal(add(2, 3), 5);
});

test('add throws a TypeError when called with a non-finite input', () => {
  assert.throws(() => add('2', 3), TypeError);
  assert.throws(() => add(2, NaN), TypeError);
  assert.throws(() => add(Infinity, 3), TypeError);
  assert.throws(() => add(null, 3), TypeError);
  assert.throws(() => add(2, undefined), TypeError);
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

test('multiply returns the product of two finite numbers', () => {
  assert.equal(multiply(4, 5), 20);
});

test('multiply returns the product with a negative operand', () => {
  assert.equal(multiply(-4, 5), -20);
});

test('multiply returns zero when one operand is zero', () => {
  assert.equal(multiply(0, 5), 0);
});

test('multiply returns an unrounded result for non-integer operands', () => {
  assert.equal(multiply(0.1, 0.2), 0.1 * 0.2);
});

test('multiply throws a TypeError when called with a non-finite input', () => {
  assert.throws(() => multiply('4', 5), TypeError);
  assert.throws(() => multiply(4, NaN), TypeError);
  assert.throws(() => multiply(Infinity, 5), TypeError);
  assert.throws(() => multiply(null, 5), TypeError);
  assert.throws(() => multiply(4, undefined), TypeError);
});

test('multiply does not mutate its inputs and produces no console output', () => {
  const a = 4;
  const b = 5;
  const originalLog = console.log;
  let called = false;
  console.log = () => { called = true; };
  try {
    const result = multiply(a, b);
    assert.equal(result, 20);
    assert.equal(a, 4);
    assert.equal(b, 5);
    assert.equal(called, false);
  } finally {
    console.log = originalLog;
  }
});
