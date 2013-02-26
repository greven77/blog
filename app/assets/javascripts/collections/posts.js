Blog.Collections.Posts = Backbone.Collection.extend({
  url: "/api/posts",
  model: Blog.Models.Post,

  initialize: function(){
  	this.page = 1;
  	this.pageNumber = Math.ceil(this.length / 10);
  },

  previousPage: function(){

  	if (this.page > 1){
  		this.page = this.page - 1;
  		return this.page;
  	}
  	return false;
  },

  nextPage: function(){

  	if (this.length >= 10){
  		this.page = this.page + 1;
  		return this.page;
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

    this.getPage(this.page);
  },

  getPage: function(pageNumber){
    this.url = "/api/posts/page/" + pageNumber;
    this.fetch();
  }

});