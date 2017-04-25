class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user = current_user

    if @comment.save
      @track = @comment.track
      render template: "api/tracks/show"
    else
      render json: @comment.errors, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @track = @comment.track
    @comment.destroy
    render template: "api/tracks/show"
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :track_id)
  end
end
