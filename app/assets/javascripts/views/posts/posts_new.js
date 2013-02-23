Blog.Views.PostsNew = Backbone.View.extend({

	events: {
		'submit #post' : 'createPost',
		'click a': 'showPostsList',
	},

	render: function(){
		this.$el.html(Blog.template('posts/form').render());
		return this;
	},

	createPost: function(event){
		event.preventDefault();
		var attributes = {	title: this.$('#post_title').val(),
							content: this.$('#post_content').val()}
		return this.collection.create(attributes, {
			success: this.showPostsList,
			error: this.errorHandler
		});	
	},

	errorHandler: function(post, response){
		if (response.status == 422){
			console.log(response.status);
			errors = $.parseJSON(response.responseText).errors;
			for(attribute in errors){
				messages = errors[attribute];
				messages.forEach(function(message){
					$('#errors').append("<div class='error'>" + message + "<div/>");
				});
			}
		}
	},

	showPostsList: function(event){
		if(event.preventDefault){
			event.preventDefault();
		}

		Backbone.history.navigate("/",  true);
	}
});