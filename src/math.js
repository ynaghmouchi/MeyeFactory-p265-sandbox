// P2.4 spike sandbox: the file the agent's Task extends.

/** Throws a TypeError if the given value is not a finite number (rule R1). */
function assertFiniteNumber(value, name) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new TypeError(`${name} must be a finite number`);
  }
}

/** Sum of two numbers. Enforces R1: inputs must be finite numbers. */
export function add(a, b) {
  assertFiniteNumber(a, 'a');
  assertFiniteNumber(b, 'b');
  return a + b;
}

/** Difference of two numbers (a - b). Enforces R1: inputs must be finite numbers. */
export function subtract(a, b) {
  assertFiniteNumber(a, 'a');
  assertFiniteNumber(b, 'b');
  return a - b;
}

/** Product of two numbers. Enforces R1: inputs must be finite numbers. */
export function multiply(a, b) {
  assertFiniteNumber(a, 'a');
  assertFiniteNumber(b, 'b');
  return a * b;
}

/**
 * Quotient of two numbers (a / b).
 * Enforces R1: inputs must be finite numbers.
 * Enforces R3: dividing by zero throws a RangeError.
 */
export function divide(a, b) {
  assertFiniteNumber(a, 'a');
  assertFiniteNumber(b, 'b');
  if (b === 0) {
    throw new RangeError('b must not be zero');
  }
  return a / b;
}
