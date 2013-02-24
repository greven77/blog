Blog.Views.CommentsNew = Backbone.View.extend({

	events: {
		'submit #comment' : 'createComment',
	},

	render: function(){
		this.$el.html(Blog.template('comments/form').render());
		return this;
	},

	createComment: function(event){
		event.preventDefault();
		var attributes = {	author: this.$('#comment_author').val(),
							content: this.$('#comment_content').val()}
		return this.collection.create(attributes, {
			error: this.errorHandler
		});	
	},

	errorHandler: function(comment, response){
		if (response.status == 422){
			errors = $.parseJSON(response.responseText).errors;
			for(attribute in errors){
				messages = errors[attribute];
				messages.forEach(function(message){
					$('#errors').append("<div class='error'>" + message + "<div/>");
				});
			}
		}
	}
});