class RemovebookmarkId < ActiveRecord::Migration[5.0]
  def change  
    remove_column :events, :bookmark_id, :integer
  end
end
