// ESM syntax is supported.
import debugModule from 'debug'

const debug = debugModule('Main')

debug('Init %s', process.env.NODE_ENV)

class Main {
  get mode () {
    return process.env.NODE_ENV
  }

  get version () {
    return 'a'
  }
}
export default Main
module.exports = Main
