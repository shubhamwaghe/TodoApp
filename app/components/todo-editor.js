import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  title: null,
  body: null,
  actions: {
    createTodo() {
      var title = this.get('title');
      var body = this.get('body');
      var store = this.get('store');
      var todo = store.createRecord("todo", {
        title: title,
        body: body,
      });
      todo.save();
      this.set('title', "");
      this.set('body', "");
      this.sendAction('handleRedirect');
    },

    updateTodo() {
      var todo = this.get('model');
      todo.save();
      this.sendAction('handleRedirect');
    },

    cancelCreate() {
      this.set('title', "");
      this.set('body', "");
      this.sendAction('handleRedirect');
    },

    cancelUpdate() {
      var todo = this.get('model');
      todo.rollbackAttributes();
      this.sendAction('handleRedirect');
    }
  }
});
