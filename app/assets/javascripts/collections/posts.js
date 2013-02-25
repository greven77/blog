Blog.Collections.Posts = Backbone.Collection.extend({
  url: "/api/posts",
  model: Blog.Models.Post,

  initialize: function(){
  	this.page = 1;
  	this.fetch();
  	this.pageNumber = this.length;
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
  		return;
  	}
  	return false;
  },

  hasPreviousPage: function(){
  	return this.page > 1;
  },

  hasNextPage: function(){
  	return this.length >= 10;
  },

  getPaginatedPosts: function(){

  	if (this.page == "undefined"){
  		this.page = 1;
  	}

  	if (this.pageNumber == 0){
  		this.pageNumber = Math.ceil(this.length / 10);
  	}

  	this.url = "/api/posts/page/" + this.page;
  	this.fetch();
  }

});