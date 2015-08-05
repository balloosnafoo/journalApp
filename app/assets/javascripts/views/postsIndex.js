JournalApp.Views.PostsIndex = Backbone.View.extend({
  tagName: "ul",

  initialize: function () {
    this.collection.fetch({ reset: true });
    this.listenTo(this.collection, "remove", this.render);
    this.listenTo(this.collection, "reset", this.render);
  },

  render: function () {
    this.$el.empty();
    this.collection.forEach( function (post) {
      var postView = new JournalApp.Views.PostIndexItem({ model: post });
      this.$el.append(postView.render().$el);
    }.bind(this));
    return this;
  }
});
