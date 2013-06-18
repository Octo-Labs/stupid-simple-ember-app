UselessApp = Ember.Application.create();

UselessApp.Person = Ember.Object.extend({
  firstName: null,
  lastName: null,

  fullName: function() {
    return this.get('firstName') + " " + this.get('lastName');
  }.property('firstName', 'lastName')
});


UselessApp.IndexRoute = Ember.Route.extend({

  model: function(params){
    return UselessApp.Person.create({
      firstName:"Jeremy",
      lastName:"Green"
    });
  }

});

UselessApp.IndexController = Ember.ObjectController.extend({
  isEditing:       false,
  toggleEditing:   function(){this.set('isEditing',!this.get('isEditing'))}
});
