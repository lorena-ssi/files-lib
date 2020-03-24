import test from 'tape'
import tapSpec from 'tap-spec'
import Main from '../src/main'
test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout)

test('True is true', function (t) {
  t.plan(1)
  t.assert(true, 'Should be true')
})

test('Check mode', function (t) {
  t.plan(1)
  const myClass = new Main()
  t.assert(myClass.mode === 'development', 'Should be development')
})
