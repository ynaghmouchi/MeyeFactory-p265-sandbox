// P2.4 spike sandbox: the file the agent's Task extends.

/** Throws a TypeError if the given value is not a finite number (rule R1). */
function assertFiniteNumber(value, name) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new TypeError(`${name} must be a finite number`);
  }
}

/** Sum of two numbers. */
export function add(a, b) {
  return a + b;
}

/** Difference of two numbers (a - b). Enforces R1: inputs must be finite numbers. */
export function subtract(a, b) {
  assertFiniteNumber(a, 'a');
  assertFiniteNumber(b, 'b');
  return a - b;
}
