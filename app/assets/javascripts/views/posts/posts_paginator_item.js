Blog.Views.PostsItem = Backbone.View.extend({
	
	events: {
		'click #showPage' : 'showPage'
	},	

	render: function(){
		this.$el.html(Blog.template('posts/page_button').render({number: this.number}));
		return this;
	},

	showPage: function(event){
		event.preventDefault();
		Backbone.history.navigate("posts/pages/" + this.id, true);
	}
});