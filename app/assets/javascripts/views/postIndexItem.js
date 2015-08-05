JournalApp.Views.PostIndexItem = Backbone.View.extend({
  template: JST["PostIndexItem"],

  tagName: "li",

  render: function() {
    this.$el.html(this.template({post: this.model}));
    return this;
  }
});
