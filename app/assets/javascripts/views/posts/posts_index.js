Blog.Views.PostsIndex = Backbone.View.extend({

  events: {
    'click #new': 'newPost'
  },

  initialize: function(){
    _.bindAll(this, 'render');
    this.collection.bind('reset', this.render, this);
    this.collection.bind('change', this.render, this);
  },

  render: function(){
  	this.$el.html(Blog.template('posts/index').render());
  	this.collection.each(this.addOne, this);
  	return this;
  },

  addOne: function(post){
  	view = new Blog.Views.PostsItem({model: post});
  	this.$('#posts').append(view.render().el, this);
  },

  newPost: function(event){
    event.preventDefault();
    Backbone.history.navigate('posts/new', true);
  }

});
