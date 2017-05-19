import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
    createTodo() {
    	let title = this.get('title');
    	let body = this.get('body');
      var todo = this.store.createRecord("todo", {
        title: title,
        body: body,
      });
      todo.save();
      this.transitionToRoute('todos');
    }
  }
});
