class RemoveDefaultfromUser < ActiveRecord::Migration[5.0]
  def change
    change_column_default(:users, :event_count, nil)
    change_column_default(:users, :bookmark_count, nil)
    change_column_default(:users, :ticket_count, nil)
  end
end
