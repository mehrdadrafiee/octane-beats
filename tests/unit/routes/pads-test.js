import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pads', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pads');
    assert.ok(route);
  });
});
