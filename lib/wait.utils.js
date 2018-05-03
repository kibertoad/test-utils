/**
 *
 * @param {function} predicateFn
 * @param {integer} sleepAmount
 * @returns {Promise<*>}
 */
function waitUntilTrue(predicateFn, sleepAmount = 100) {
  return new Promise((resolve, reject) => {
    function performCheck() {
      if (predicateFn()) {
        resolve();
      } else {
        setTimeout(performCheck, sleepAmount);
      }
    }
    performCheck();
  });
}

module.exports = {
  waitUntilTrue
};
