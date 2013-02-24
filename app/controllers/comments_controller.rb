class CommentsController < ApplicationController
	before_filter :find_post
  respond_to :json

	def index
		respond_with @post.comments
	end

  def create
    @comment = @post.comments.build(params[:comment])
    @comment.save
    puts @comment.author + " " + @comment.content
    respond_with @comment, location: post_comments_url
  end

  def destroy
    @comment= @post.comments.find_by_id(params[:id])
    respond_with @comment.destroy
  end

	private

		def find_post
      @post = Post.find(params[:post_id])
      rescue ActiveRecord::RecordNotFound
        error = { :error => "The post you were looking for" +
                  " could not be found."}
        respond_with(error, :status => 404) 
    end
end
