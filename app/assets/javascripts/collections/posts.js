Blog.Collections.Posts = Backbone.Collection.extend({
  url: "/api/posts",
  model: Blog.Models.Post,

  initialize: function(){
  	this.page = 1;
  },

  previousPage: function(){

  	if (this.page > 1){
  		this.page = this.page - 1;
  		this.getPaginatedPosts();
  		return;
  	}
  	return false;
  },

  nextPage: function(){

  	if (this.length >= 10){
  		this.page = this.page + 1;
  		this.getPaginatedPosts();
  		console.log("paginated");
  		return;
  	}
  	return false;
  },

  getPaginatedPosts: function(){
  	if (this.page == "undefined"){
  		this.page = 1;
  	}

  	this.url = "/api/posts/page/" + this.page;
  	this.fetch();
  }

});