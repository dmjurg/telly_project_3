class AddOverviewToShows < ActiveRecord::Migration
  def change
    add_column :shows, :overview, :string
  end
end
