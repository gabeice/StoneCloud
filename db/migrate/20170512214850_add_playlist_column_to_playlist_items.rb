class AddPlaylistColumnToPlaylistItems < ActiveRecord::Migration[5.0]
  def change
    add_column :playlist_items, :playlist_id, :integer
    add_index :playlist_items, :playlist_id
  end
end
