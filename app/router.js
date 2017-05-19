import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('todos', { path: '/' });
  this.route('new');
  this.route('edit', { path: '/edit/:todo_id' });
});

export default Router;
