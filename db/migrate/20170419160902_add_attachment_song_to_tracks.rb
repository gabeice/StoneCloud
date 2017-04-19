class AddAttachmentSongToTracks < ActiveRecord::Migration
  def self.up
    change_table :tracks do |t|
      t.attachment :song
    end
  end

  def self.down
    remove_attachment :tracks, :song
  end
end
