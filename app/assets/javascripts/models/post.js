Blog.Models.Post = Backbone.Model.extend({

	initialize: function(){
		this.comments = new Blog.Collections.Comments();
		this.comments.url = '/api/posts/' + this.id + '/comments';
		this.comments.fetch();
	}
});
