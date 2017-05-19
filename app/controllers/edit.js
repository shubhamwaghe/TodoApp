import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateTodo() {
      var todo = this.get('model');
      todo.save();
      this.transitionToRoute('todos');
    },

    cancelUpdate(todo) {
      todo.rollbackAttributes();
      this.transitionToRoute('todos');
    }
  }
});
