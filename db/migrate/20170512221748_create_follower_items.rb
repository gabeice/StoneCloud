class CreateFollowerItems < ActiveRecord::Migration[5.0]
  def change
    create_table :follower_items do |t|
      t.integer :follower_id
      t.integer :followee_id

      t.timestamps
    end

    add_index :follower_items, :follower_id
    add_index :follower_items, :followee_id
  end
end
