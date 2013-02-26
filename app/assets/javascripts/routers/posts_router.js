Blog.Routers.Posts = Backbone.Router.extend({
	routes: {
		'': 'index',
		'posts/:id': 'show',
		'posts/:id/edit': 'edit',
		'posts/new/': 'newPost',
		'admin': 'admin',
		'posts/page/:id': 'getPostsPage'
	},

	initialize: function(){
		this.collection = new Blog.Collections.Posts();
		//this.collection.fetch();
	},

	index: function(){
		this.getPostsPage(1);
		// this.collection.getPage(1);
		// view = new Blog.Views.PostsIndex({collection: this.collection});
		// $('#container').html(view.render().el);
	},

	getPostsPage: function(id){
		this.collection.getPage(id);
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
	},
	//accessed through hash based routing
	admin: function(){
		$('#container').html("admin");
	}
});
