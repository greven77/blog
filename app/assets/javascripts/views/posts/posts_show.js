Blog.Views.PostsShow = Backbone.View.extend({

	events: {
		'click #return' : 'returnToIndex'
	},

	initialize: function(){
		this.comments = new Blog.Collections.Comments();
	},

	render: function(){
		this.$el.html(Blog.template('posts/show').render(this.model.toJSON()));
		this.renderCommentForm();
		this.addAll();
		return this;
	},

	renderCommentForm: function(){
		var url = '/api/posts/' + this.model.id + '/comments';
		this.comments.url = url;
		view = new Blog.Views.CommentsNew({collection: this.comments});
		this.$('#new_comment').append(view.render().el, this);
	},

	addOne: function(comment){
	  	view = new Blog.Views.CommentsItem({model: comment});
	  	this.$('#comments').append(view.render().el, this);
    },

    addAll: function(){;
    	this.model.comments.each(this.addOne, this);
    },

	returnToIndex: function(event){
		event.preventDefault();
		Backbone.history.navigate("/", true);
	}
});