class CreatePlaylistItems < ActiveRecord::Migration[5.0]
  def change
    create_table :playlist_items do |t|
      t.integer :user_id, null: false
      t.integer :track_id, null: false

      t.timestamps
    end

    add_index :playlist_items, :user_id
    add_index :playlist_items, :track_id
  end
end
