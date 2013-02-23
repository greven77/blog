Blog.Views.PostsShow = Backbone.View.extend({

	events: {
		'click #return' : 'returnToIndex'
	},

	render: function(){
		this.$el.html(Blog.template('posts/show').render(this.model.toJSON()));
		return this;
	},

	returnToIndex: function(event){
		event.preventDefault();
		Backbone.history.navigate("/", true);
	}
});