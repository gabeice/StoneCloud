class Api::PlaylistItemsController < ApplicationController
  def create
    @playlist_item = PlaylistItem.new(playlist_item_params)
    @playlist_item.save
    @playlist = @playlist_item.playlist
    render template: "api/playlists/show"
  end

  def destroy
    @playlist_item = PlaylistItem.find(params[:id])
    @playlist = @playlist_item.playlist
    @playlist_item.destroy
    render template: "api/playlists/show"
  end

  def playlist_item_params
    params.require(:playlist_item).permit(:track_id, :playlist_id)
  end
end
