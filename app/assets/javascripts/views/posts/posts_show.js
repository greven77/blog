Blog.Views.PostsShow = Backbone.View.extend({

	render: function(){
		this.$el.html(Blog.template('posts/show').render(this.model.toJSON()));
		return this;
	}
});