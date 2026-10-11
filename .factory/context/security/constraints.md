---
last_verified_commit: 985df9f87cf147a03c6ca4a5a7a6b8616d146d7c
---
# Security constraints (fixture)

- The library handles no personal data and no credential. No credential, key or token is ever written in this repository, in a test or in a fixture.
- No network access: no HTTP call, no socket, no DNS lookup.
- No dynamic code execution: no `eval`, no `new Function`, no dynamic `import()` of a computed path.
- No child process and no file system access from `src/`.
- No new dependency: `package.json` declares none, and a Task adds none.
- Tests run in an isolated container without network; a test that needs the network is wrong.
- This product has no production and no staging environment.
