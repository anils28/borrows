import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  twittter: DS.attr('string'),
  totalArticles: DS.attr('number')
});
