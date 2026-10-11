// P2.4 spike sandbox: the file the agent's Task extends.

function assertFiniteNumber(value) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new TypeError('Expected a finite number');
  }
}

/** Sum of two numbers. */
export function add(a, b) {
  assertFiniteNumber(a);
  assertFiniteNumber(b);
  return a + b;
}
