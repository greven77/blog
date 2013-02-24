Blog.Collections.Comments = Backbone.Collection.extend({
	url: '/api/comments',
	model: Blog.Models.Comment
});