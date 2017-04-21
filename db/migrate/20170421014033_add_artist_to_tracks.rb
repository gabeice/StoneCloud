class AddArtistToTracks < ActiveRecord::Migration[5.0]
  def change
    add_column :tracks, :artist, :string, null: false, default: "The Rolling Stones"
  end
end
