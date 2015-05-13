class CreateShows < ActiveRecord::Migration
  def change
    create_table :shows do |t|
      t.string  :title
      t.integer :seasons
      t.text    :airdates
      t.integer :rating

      t.timestamps
    end
  end
end
