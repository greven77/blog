Blog.Views.PostsIndex = Backbone.View.extend({

  initialize: function(){
    this.collection.on('reset', this.render, this);
  },

  render: function(){
  	this.$el.html(Blog.template('posts/index').render());
  	this.collection.each(this.addOne);
  	return this;
  },

  addOne: function(post){
  	view = new Blog.Views.PostsShow({model: post});
  	this.$('#posts').append(view.render().el, this);
  }

});
