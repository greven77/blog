Blog.Collections.Posts = Backbone.Collection.extend({
  url: "/api/posts",
  model: Blog.Models.Post

});