class CreateAuthors < ActiveRecord::Migration[6.1]
  def change
    create_table :authors do |t|
      t.string :name
      t.string :location
      t.string :tagline
      t.string :avatar_url

      t.timestamps
    end
  end
end
