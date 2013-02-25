class PostsController < ApplicationController
	#respond_to :json

	def index
		#respond_with Post.all
		if params[:page]
   			@posts = Post.page(params[:page]).per(10)
   		else
			@posts = Post.all
		end

		respond_to  do |format|
			format.html
			format.json { render json: @posts }
		end
	end

	def show
		#respond_with Post.find(params[:id])
		@post = Post.find(params[:id])
		
		respond_to do |format|
			format.html
			format.json { render json: @post }
		end
	end
end
