JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST["postsIndex"],

  tagName: "ul",

  render: function () {
    this.collection.forEach( function (post) {
      var postView = new JournalApp.Views.PostIndexItem({ model: post });
      this.$el.append(postView.render().$el);
    });
    return this;
  }
});
