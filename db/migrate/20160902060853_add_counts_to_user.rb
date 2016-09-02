class AddCountsToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :event_count, :integer, :default => 0
    add_column :users, :ticket_count, :integer, :default => 0
    add_column :users, :bookmark_count, :integer, :default => 0
  end
end
