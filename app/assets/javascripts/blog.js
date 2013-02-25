window.Blog = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(posts) {
    this.posts = new Blog.Collections.Posts(posts);
    this.app = new Blog.Routers.Posts();
    Backbone.history.start({pushState: true});
    return this;
  },

  template: function(filename){
  	return HoganTemplates[filename];
  }
};

$(document).ready(function(){
  Blog.initialize();
});
