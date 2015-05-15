class CreateShows < ActiveRecord::Migration
  def change
    create_table :shows do |t|
      t.string  :name
      t.text    :first_air_date
      t.integer :api_id

      t.timestamps
    end
  end
end
