---
last_verified_commit: afce17320b96b53b11f8e1a5c8c5f71610c7fdfe
---
# Testing conventions (fixture)

- Test runner: the Node.js built-in runner, `node --test`. No test framework is added.
- Assertions: `node:assert/strict`.
- One test file: `test/math.test.js`. Each exported function has at least one test of its nominal case and one test of each rule it must enforce (R1 and, where it applies, R3).
- A test name states the behaviour, for example "add returns the sum of two numbers".
- Tests are deterministic: no randomness, no clock, no network, no shared state between tests.
- A change is complete when `node --test` passes and every acceptance criterion of its Task is covered by a test.
