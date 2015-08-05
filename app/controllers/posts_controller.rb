class PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    if @post.save
      render :json => @post
    else
      render :json => @post.errors.full_messages
    end
  end

  def show
    @post = Post.find(params[:id])
    render :json => @post
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end
end
