class CreateSeasons < ActiveRecord::Migration
  def change
    create_table :seasons do |t|
      t.integer :seasonnumber
      t.integer :numberofepisodes
      t.text    :airdates
      t.integer :rating
    end
  end
end
