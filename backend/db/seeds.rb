# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

categories = %w[React CSS TypeScript JavaScript Storybook Ruby Rails]

# Make sure there's the same number of colours as categories for the each loop
colours = %w[red yellow green blue indigo purple pink]

raise 'Please ensure there are the same number of colours as categories' if colours.length != categories.length

categories.each_with_index do |category, i|
  Category.create(
    title: category,
    colour: colours[i]
  )
end

10.times do
  name = Faker::TvShows::ParksAndRec.character
  avatar_url = "https://robohash.org/#{name}"

  Author.create(
    name: name,
    location: Faker::TvShows::ParksAndRec.city,
    tagline: Faker::TvShows::MichaelScott.quote,
    avatar_url: avatar_url
  )
end

authors = Author.all

authors.each do |author|
  5.times do
    timestamp = rand(1.month).seconds.ago

    author.articles.create(
      title: Faker::Lorem.sentence(word_count: 4),
      body: Faker::Markdown.sandwich(sentences: rand(6..30)),
      category_id: Category.all.sample.id,
      created_at: timestamp,
      updated_at: timestamp
    )
  end
end
