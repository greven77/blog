class PostsController < ApplicationController
	#respond_to :json

	def index
		#respond_with Post.all
		@posts = Post.all
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
