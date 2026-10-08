---
last_verified_commit: afce17320b96b53b11f8e1a5c8c5f71610c7fdfe
---
# Business rules (fictive, fixture only)

These rules are invented for the sandbox. They are the only business rules of this product. A request that needs a rule not written here is missing a rule: it must be reported as missing, never guessed.

## R1 — Inputs are finite numbers

Every operation takes finite JavaScript numbers. A value that is not a finite number (a string, `NaN`, `Infinity`, `null`, `undefined`) is refused with a `TypeError`.

## R2 — Operations are pure

An operation returns a value and changes nothing else: no global state, no input mutation, no output on the console.

## R3 — Division by zero is refused

Dividing by zero throws a `RangeError`. It never returns `Infinity` or `NaN`.

## R4 — No rounding

Results are returned as JavaScript computes them. No operation rounds, truncates or formats its result.

## Not defined

- Operations on integers larger than `Number.MAX_SAFE_INTEGER`.
- Any notion of currency, unit or precision.
- Any operation on more than two operands.
