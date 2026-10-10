---
last_verified_commit: a1932a5aa401624163dd688df0c9689bbee9700a
---
# Current state (fixture)

At the commit named above:

- `src/math.js` exports two functions: `add(a, b)`, which returns the sum of two numbers, and `subtract(a, b)`, which returns their difference.
- `subtract` enforces rule R1 (inputs are finite numbers): a non-finite input throws a `TypeError`.
- Rule R1 is not enforced yet by `add`: it returns whatever JavaScript computes.
- `test/math.test.js` has four tests: the nominal case of `add`; the nominal case of `subtract`, its refusal of a non-finite input, and that it neither mutates its inputs nor writes on the console.
- No other operation exists: no multiplication or division.
- Continuous integration runs `node --test` on every pull request, and on every push to a Sprint Branch or to `develop`.
