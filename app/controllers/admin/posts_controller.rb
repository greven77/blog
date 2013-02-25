class Admin::PostsController < Admin::BaseController

  before_filter :find_post, :only => [:show, :edit, :update, :destroy]
  
  def index
  	@posts = Post.order("id DESC").page(params[:page]).per(10)
  end

  def show

  end

  def edit

  end

  def new
  	@post = Post.new
  end

  def create
  	if @post.save
  		flash[:notice] = "Post has been created."
  		redirect_to admin_posts_path
  	else
  		flash.now[:alert] = "Post has not been created."
  		render :action => "new"
  	end
  end

  def update
  	if @post.update_attributes(params[:post])
  		flash[:notice] = "Post has been updated."
  		redirect_to admin_posts_path
  	else
  		flash[:alert] = "Post has not been updated."
  		render :action => "edit"
  	end
  end

  def destroy
	@post.destroy
	flash[:notice] = "Post has been deleted."

  	redirect_to admin_posts_path
  end

  private
  	def find_post
  		@post = Post.find(params[:id])
  	end
end
