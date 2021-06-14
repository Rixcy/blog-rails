class Category < ApplicationRecord
  validates :title, presence: true
  validates :colour, presence: true,
                     inclusion: {
                       in: %w[red yellow green blue indigo purple pink],
                       message:
                          'Please pick a colour from red, yellow, green, blue, indigo, purple or pink'
                     }

  has_many :articles
end
