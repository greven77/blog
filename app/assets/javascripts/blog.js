window.Blog = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
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
