require 'test_helper'

class CategoryTest < ActiveSupport::TestCase
  test 'validates presence of title' do
    category = categories(:one)
    category.title = nil
    assert_not category.valid?
    category.title = ''
    assert_not category.valid?
    category.title = 'test'
    assert category.valid?
  end

  test 'runs validation on colour' do
    category = categories(:one)
    category.colour = nil
    assert_not category.valid?
    category.colour = ''
    assert_not category.valid?
    category.colour = '#ffffff'
    assert_not category.valid?
    category.colour = 'turquoise'
    assert_not category.valid?
    category.colour = 'green'
    assert category.valid?
  end

  test "can access category's articles" do
    category = categories(:one)
    assert_equal category.articles.first.id, categories(:one).id
  end
end
