class Api::PlaylistsController < ApplicationController
  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.user_id = current_user.id

    if @playlist.save
      render :show
    else
      render json: @playlist.errors, status: 422
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy if @playlist.user_id = current_user.id
    render :show
  end

  def show
    @playlist = Playlist.find(params[:id])
  end

  private
  def playlist_params
    params.require(:playlist).permit(:name)
  end
end
