window.Blog = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(posts) {
    this.posts = new Blog.Collections.Posts(posts);
    this.app = new Blog.Routers.Posts();
    Backbone.history.start({pushState: true});
    $('#search').autocomplete({
        source: "/search_suggestions"
    });
    console.log("started");
    return this;
  },

  template: function(filename){
  	return HoganTemplates[filename];
  }
};

$(document).ready(function(){
  Blog.initialize();
});
