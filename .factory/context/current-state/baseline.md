---
last_verified_commit: afce17320b96b53b11f8e1a5c8c5f71610c7fdfe
---
# Current state (fixture)

At the commit named above:

- `src/math.js` exports one function, `add(a, b)`, which returns the sum of two numbers.
- `test/math.test.js` has one test, of the nominal case of `add`.
- Rule R1 (inputs are finite numbers) is not enforced yet by `add`: it returns whatever JavaScript computes.
- No other operation exists: no subtraction, multiplication or division.
- Continuous integration runs `node --test` on every push.
