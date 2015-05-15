class CreateFavoritesJoin < ActiveRecord::Migration
  def change
    create_join_table :shows, :users do |t|
      t.index :show_id
      t.index :user_id
    end
  end
end
