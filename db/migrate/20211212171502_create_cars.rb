class CreateCars < ActiveRecord::Migration[6.1]
  def change
    create_table :cars do |t|
      t.references :user, null: false, foreign_key: true
      t.string :make
      t.string :model
      t.integer :year
      t.string :content
      t.string :img_url

      t.timestamps
    end
  end
end
