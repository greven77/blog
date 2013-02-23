Blog.Routers.Posts = Backbone.Router.extend({
	routes: {
		'': 'index',
		'posts/:id': 'show'
	},

	initialize: function(){
		this.collection = new Blog.Collections.Posts();
		this.collection.fetch();
	},

	index: function(){
		view = new Blog.Views.PostsIndex({collection: this.collection});
		$('#container').html(view.render().el);
	},

	show: function(id){
		post = this.collection.get(id);
		view = new Blog.Views.PostsShow({model: post});
		$('#container').html(view.render().el);
	}
});
