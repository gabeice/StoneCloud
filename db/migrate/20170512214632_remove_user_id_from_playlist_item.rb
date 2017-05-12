class RemoveUserIdFromPlaylistItem < ActiveRecord::Migration[5.0]
  def change
    remove_column :playlist_items, :user_id
  end
end
