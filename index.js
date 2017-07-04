'use strict'

/**
 * Returns job number if project is run on CI or `1` on local.
 *
 * @return {number} CI job number
 *
 * @example
 * const ciJobNumber = require('ci-job-number')
 *
 * if (ciJobNumber() === 1) {
 *   runSpellingCheck()
 * } else {
 *   console.warn('To speed up CI spelling check runs only in first job')
 * }
 */
module.exports = function ciJobNumber () {
  if (process.env.TRAVIS) {
    return parseInt(process.env.TRAVIS_JOB_NUMBER.split('.')[1])
  } else if (process.env.APPVEYOR) {
    return parseInt(process.env.APPVEYOR_JOB_NUMBER)
  } else {
    return 1
  }
}
