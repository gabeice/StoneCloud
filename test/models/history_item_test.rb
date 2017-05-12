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

require 'test_helper'

class HistoryItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
