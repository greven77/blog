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
		var attributes = this.model.toJSON();
		attributes.content = this.limitPostChars(attributes);
		this.$el.html(Blog.template('posts/item').render(attributes));
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
		self = this;
		event.preventDefault();
		this.model.destroy({
			success: function(){
				self.remove();
			}
		});
	},

	limitPostChars: function(attributes){
		var str = attributes.content;
		if(str.length >= 50){
			str = str.substring(0, 50) + "..."; 
			console.log(str);
		}
		return str;
	}
});