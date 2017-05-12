# == Schema Information
#
# Table name: history_items
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  track_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class HistoryItem < ApplicationRecord
  validates :user_id, presence: true
  validates :track_id, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :track,
    primary_key: :id,
    foreign_key: :track_id,
    class_name: 'Track'
end
