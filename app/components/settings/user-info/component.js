import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['well'],
  access: Ember.inject.service(),
  account: Ember.computed.alias('access.identity')

});
