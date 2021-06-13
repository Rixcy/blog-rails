class Author < ApplicationRecord
  validates :name, presence: true

  has_many :articles
end
