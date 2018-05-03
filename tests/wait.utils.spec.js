const { assert } = require('chai');

const waitUtils = require('../lib/wait.utils');

describe('wait.utils', () => {
  describe('waitUntilTrue', () => {
    //unstopped intervals prevent mocha from shutting down cleanly
    let interval;
    after(() => {
      if (interval) {
        clearInterval(interval);
      }
    });

    it('happy path', done => {
      let timer = 0;
      interval = setInterval(() => {
        timer++;
      }, 1);

      waitUtils
        .waitUntilTrue(() => {
          console.log(timer);
          return timer > 1000;
        })
        .then(() => {
          assert.isTrue(timer > 1000);
          done();
        });
    });
  });
});
