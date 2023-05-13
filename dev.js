const concurrently = require('concurrently');

concurrently([
  "yarn start",
  "wait-on http://127.0.0.1:3000 && tsc -p . -w",
  "wait-on http://127.0.0.1:3000 && tsc -p . && electron .",
], {
    prefix: 'name',
    killOthers: ['failure', 'success'],
    restartTries: 0,
}).then(
    function onSuccess() {
      // This code is necessary to make sure the parent terminates 
      // when the application is closed successfully.
      process.exit();
    },
    function onFailure() {
      // This code is necessary to make sure the parent terminates 
      // when the application is closed because of a failure.
      process.exit();
    }
  );
