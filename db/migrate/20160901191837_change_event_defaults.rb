class ChangeEventDefaults < ActiveRecord::Migration[5.0]
  def change
    change_column_default :events, :image_url, "assets/default.png"
    change_column_default :events, :location, "Somewhere on Earth"
  end
end
