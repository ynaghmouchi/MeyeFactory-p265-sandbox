---
last_verified_commit: 985df9f87cf147a03c6ca4a5a7a6b8616d146d7c
---
# Current state (fixture)

At the commit named above:

- `src/math.js` exports two functions: `add(a, b)`, which returns the sum of two numbers, and `subtract(a, b)`, which returns their difference.
- Both enforce rule R1 (inputs are finite numbers): a non-finite input throws a `TypeError`.
- `test/math.test.js` has five tests: the nominal case of `add` and its refusal of a non-finite input; the nominal case of `subtract`, its refusal of a non-finite input, and that it neither mutates its inputs nor writes on the console.
- No other operation exists: no multiplication or division.
- Continuous integration runs `node --test` on every pull request, and on every push to a Sprint Branch or to `develop`.
