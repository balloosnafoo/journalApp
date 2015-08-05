JournalApp.Views.PostShow = Backbone.View.extend({
  template: JST["postShow"],

  events: {
    "click .post-index-link": "postsIndex"
  },

  initialize: function() {
    this.model.fetch({reset: true})
  },

  render: function() {
    this.$el.html(this.template({post: this.model}));
    return this;
  },

  postsIndex: function () {
    Backbone.history.navigate("", {"trigger": true});
  }

});
