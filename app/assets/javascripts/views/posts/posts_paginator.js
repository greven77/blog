Blog.Views.PostsPaginator = Backbone.View.extend({
	events: {
	    'click #next' : 'renderNext',
	    'click #previous' : 'renderPrevious',
	    'click #first' : 'renderFirst',
	    'click #last' :  'renderLast'
	},

	render: function(){
		this.$el.html(Blog.template('posts/paginator').render());
		for(var i=1; i <= this.collection.pageNumber; i++){
			this.addButton(i);
		}
    return this;
	},

	addButton: function(number){
		view = new Blog.Views.PageButton({number: number});
	  this.$('#page_numbers').append(view.render().el, this);
	},

  renderPrevious: function(event){
    event.preventDefault();
    Backbone.history.navigate('posts/pages/' + this.collection.previousPage(), true);
  },

  renderNext: function(event){
    event.preventDefault();
    Backbone.history.navigate('posts/pages/' + this.collection.nextPage(), true);
  },

  renderFirst: function(event){
    event.preventDefault();
    Backbone.history.navigate('posts/pages/1', true);
  },

  renderLast: function(event){
    event.preventDefault();
    var totalPages = this.collection.pageNumber;
    Backbone.history.navigate('posts/pages/' + totalPages, true);
  }

});