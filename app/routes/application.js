import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    navigateToTodos() {
      this.transitionTo('todos');
      return false;
    }
  }
});
