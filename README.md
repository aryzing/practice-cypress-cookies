# Practicing with Cypress cookies

Get started with

```
yarn
yarn cypress:open
```

Notice how [index.js][1] has `Cypress.Cookies.debug(true)` set, but there is no cookie debug info in the console when the test runs in electron. When selecting Firefox (which is also installed in my system), the logs do appear.

https://user-images.githubusercontent.com/4924405/150016912-2fa6543d-c525-4c51-a4e0-b597546f3ca7.mp4

[1]: cypress/integration/practice/index.js
