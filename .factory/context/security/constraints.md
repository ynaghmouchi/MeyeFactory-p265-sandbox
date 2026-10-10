---
last_verified_commit: a1932a5aa401624163dd688df0c9689bbee9700a
---
# Security constraints (fixture)

- The library handles no personal data and no credential. No credential, key or token is ever written in this repository, in a test or in a fixture.
- No network access: no HTTP call, no socket, no DNS lookup.
- No dynamic code execution: no `eval`, no `new Function`, no dynamic `import()` of a computed path.
- No child process and no file system access from `src/`.
- No new dependency: `package.json` declares none, and a Task adds none.
- Tests run in an isolated container without network; a test that needs the network is wrong.
- This product has no production and no staging environment.
