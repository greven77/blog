Blog.Views.PostsEdit = Backbone.View.extend({
	
	events: {
		'submit #post' : 'updatePost',
		'click a': 'showPostsList'
	},

	render: function(){
		var attributes = this.model.toJSON();
		this.$el.html(Blog.template('posts/form').render(attributes));
		this.$('#post_title').val(attributes.title);
		this.$('#post_content').val(attributes.content);
		return this;
	},

	updatePost: function(event){
		event.preventDefault();
		postId = this.model.toJSON().id;
		var attributes = {id: postId,
							title: this.$('#post_title').val(),
							content: this.$('#post_content').val()}
		return this.collection.create(attributes, {
			success: this.showPostsList,
			error: this.handleError
		});	
	},

	showPostsList: function(event){
		if (event.preventDefault){
			event.preventDefault();
		}
		Backbone.history.navigate("/", true);
	},

	handleError: function(post, response){
		if (response.status == 422){
			console.log("bad request");
		}
	}
});