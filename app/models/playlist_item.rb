# == Schema Information
#
# Table name: playlist_items
#
#  id          :integer          not null, primary key
#  track_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  playlist_id :integer
#

class PlaylistItem < ApplicationRecord
  validates :user_id, presence: true
  validates :track_id, presence: true

  belongs_to :track,
    primary_key: :id,
    foreign_key: :track_id,
    class_name: 'Track'

  belongs_to :playlist,
    primary_key: :id,
    foreign_key: :playlist_id,
    class_name: 'Playlist'
end
