JournalApp.Routers.PostsRouter = Backbone.Router.extend({
  routes: {
    "" : "postsIndex",
    "posts/new": "newPostForm",
    "posts/:id/edit": "editPostForm",
    "posts/:id" : "postShow"
  },

  initialize: function ($el) {
    this._collection = new JournalApp.Collections.Posts();
    this._indexView = new JournalApp.Views.PostsIndex({
      collection: this._collection
    });

    this.$el = $el;
    this.$el.find(".sidebar").append(this._indexView);
  },

  swap: function (view) {
    if (this._view) {
      this._view.remove();
    }
    this._view = view;
    this.$el.html(this._view.render().$el);
  },

  postsIndex: function() {
    var postsIndexView = new JournalApp.Views.PostsIndex({
      collection: this._collection
    });

    this.swap(postsIndexView);
  },

  postShow: function(id) {
    var post = this._collection.getOrFetch(id);
    var postShowView = new JournalApp.Views.PostShow({model: post});

    this.swap(postShowView);
  },

  newPostForm: function () {
    debugger;
    var postForm = new JournalApp.Views.PostForm({
      model: new JournalApp.Models.Post(),
      collection: this._collection
    });

    this.swap(postForm);
  },

  editPostForm: function (id) {
    var postForm = new JournalApp.Views.PostForm({
      model: this._collection.getOrFetch(id),
      collection: this._collection
    });

    this.swap(postForm);
  }
});
