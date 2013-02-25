class CommentsController < ApplicationController
	before_filter :find_post

	def index
		#respond_with @post.comments
    @comments = @post.comments
    respond_to do |format|
      format.html
      format.json { render json: @comments }
    end
	end

  def new
    @comment = @post.comments.build
    respond_to do |format|
      format.html
      format.json { render json: @comment}
    end
  end

  def create
    #respond_with @comment, location: post_comments_url
    @comment = @post.comments.build(params[:comment])
    if current_user.github_display_name
      @comment.author = current_user.github_display_name
    else
      @comment.author = current_user.email
    end

    respond_to do |format| 
      if @comment.save
        format.html { redirect_to @post }
        format.json { render json: @comment, status: :created, location: post_comments_url }
      else
        format.html { redirect_to @post }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @comment= @post.comments.find_by_id(params[:id])
    @comment.destroy

    respond_to do |format|
      format.html { redirect_to comments_url}
      format.json { head :ok }
    end
  end

	private

		def find_post
      @post = Post.find(params[:post_id])
      rescue ActiveRecord::RecordNotFound
        error = { :error => "The post you were looking for" +
                  " could not be found."}
        respond_to do |format|
          format.html { redirect_to root_path }
          format.json { render json: error, :status => 404 } 
        end
    end
end
