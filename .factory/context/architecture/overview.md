---
last_verified_commit: a1932a5aa401624163dd688df0c9689bbee9700a
---
# Product purpose and architecture (fixture)

This repository is the validation sandbox of the AI Software Factory. It is a test fixture, not a real product: it has no customer, no deployment and no real business. Nothing here describes MEyeBus Pro or any other product.

## Purpose

A tiny arithmetic library, used to exercise the Factory workflow end to end: Feature Request, Spec Validation, planning, Task execution, Review, Human Approval.

## Architecture

- Plain JavaScript, ECMAScript modules, Node.js 20. No dependency, no build step.
- `src/math.js` exports pure functions. One function per operation.
- `test/math.test.js` holds the tests, run with `node --test`.
- No network, no database, no file system access, no environment variable.
- No user interface and no HTTP API.

## Boundaries

- Source code lives under `src/`, tests under `test/`. Nothing else is changed by a Task.
- A new operation is a new exported function in `src/math.js` with its tests in `test/math.test.js`.
