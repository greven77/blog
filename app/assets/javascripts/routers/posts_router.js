Blog.Routers.Posts = Backbone.Router.extend({
	routes: {
		'': 'index',
		'posts/:id': 'show',
		'posts/:id/edit': 'edit',
		'posts/new/': 'newPost'
	},

	initialize: function(){
		this.collection = new Blog.Collections.Posts();
		//this.collection.fetch();
	},

	index: function(){
		this.collection.fetch();
		view = new Blog.Views.PostsIndex({collection: this.collection});
		$('#container').html(view.render().el);
	},

	show: function(id){
		post = this.collection.get(id);
		view = new Blog.Views.PostsShow({model: post});
		$('#container').html(view.render().el);
	},

	edit: function(id){
		post = this.collection.get(id);
		view = new Blog.Views.PostsEdit({model: post, collection: this.collection});
		$('#container').html(view.render().el);
	},

	newPost: function(){
		view = new Blog.Views.PostsNew({collection: this.collection});
		$('#container').html(view.render().el);
	}
});
