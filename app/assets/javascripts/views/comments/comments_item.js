Blog.Views.CommentsItem = Backbone.View.extend({
	
	events: {
		'click #destroy' : 'removeComment'
	},	

	initialize: function(){
		this.model.bind("change", this.render);
	},

	render: function(){
		var attributes = this.model.toJSON();
		this.$el.html(Blog.template('comments/item').render(attributes));
		return this;
	},

	removeComment: function(event){
		self = this;
		event.preventDefault();
		this.model.destroy({
			success: function(){
				self.remove();
			}
		});
	}
});