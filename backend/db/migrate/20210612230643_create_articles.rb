class CreateArticles < ActiveRecord::Migration[6.1]
  def change
    create_table :articles do |t|
      t.references :category, null: false, foreign_key: true
      t.references :author, null: false, foreign_key: true
      t.string :title
      t.string :body

      t.timestamps
    end
  end
end
