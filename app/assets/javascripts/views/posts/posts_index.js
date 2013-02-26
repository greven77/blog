Blog.Views.PostsIndex = Backbone.View.extend({

  events: {
    'click #new': 'newPost'
  },

  initialize: function(){
    //_.bindAll(this, 'render');
    this.collection.bind('reset', this.render, this);
  },

  render: function(){
  	this.$el.html(Blog.template('posts/index').render());
    //this.addPaginators();
  	this.collection.each(this.addOne, this);
  	return this;
  },

  addOne: function(post){
  	view = new Blog.Views.PostsItem({model: post});
  	this.$('#posts').append(view.render().el, this);
  },

  addPaginators: function(){
    paginator = new Blog.Views.PostsPaginator({collection: this.collection});
    this.$('#top_paginator').append(paginator.render().el, this);
    this.$('#bottom_paginator').append(paginator.render().el, this);
  },

  newPost: function(event){
    event.preventDefault();
    Backbone.history.navigate('posts/new/', true);
  }
});
