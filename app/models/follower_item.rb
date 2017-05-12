class FollowerItem < ApplicationRecord
  validates :follower_id, presence: true
  validates :followee_id, presence: true

  belongs_to :follower,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: 'User'

  belongs_to :followee,
    primary_key: :id,
    foreign_key: :followee_id,
    class_name: 'User'
end
