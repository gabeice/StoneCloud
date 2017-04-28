class Api::LikesController < ApplicationController
  def create
    @like = Like.new(track_id: params[:track_id])
    @like.user_id = current_user.id
    @like.save
    @track = @like.track
    render template: "api/tracks/show"
  end
end
