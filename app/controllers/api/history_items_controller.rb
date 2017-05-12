class Api::HistoryItemsController < ApplicationController
  def create
    @history_item = HistoryItem.new(track_id: params[:track_id])
    @history_item.user_id = current_user.id
    @history_item.save
    @track = @history_item.track
    render template: "api/tracks/show"
  end
end
