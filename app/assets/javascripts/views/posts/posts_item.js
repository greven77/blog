Blog.Views.PostsItem = Backbone.View.extend({
	
	events: {
		'click #show' : 'showPost',
		'click #edit' : 'editPost',
		'click #destroy' : 'removePost'
	},	

	initialize: function(){
		this.model.bind("change", this.render);
	},

	render: function(){
		this.$el.html(Blog.template('posts/item').render(this.model.toJSON()));
		return this;
	},

	showPost: function(event){
		event.preventDefault();
		Backbone.history.navigate("posts/" + this.model.get('id'), true);
	},

	editPost: function(event){
		event.preventDefault();
		Backbone.history.navigate("posts/" + this.model.get('id') + "/edit", true);
	},

	removePost: function(event){
		event.preventDefault();
		this.model.destroy({
			success: function(){
				this.remove();
				Backbone.history.navigate("/", true);
			}
		});
	}
});