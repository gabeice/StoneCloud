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

require 'test_helper'

class PlaylistItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
