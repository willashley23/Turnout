class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :title
      t.text :description
      t.integer :price
      t.date :date
      t.string :tag
      t.integer :author_id
      t.integer :bookmark_id

      t.timestamps
    end
  end
end
