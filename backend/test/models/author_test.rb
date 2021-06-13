require 'test_helper'

class AuthorTest < ActiveSupport::TestCase
  test 'validates presence of name' do
    author = authors(:one)
    author.name = nil
    assert_not author.valid?
    author.name = ''
    assert_not author.valid?
    author.name = 'test'
    assert author.valid?
  end

  test "can access author's articles" do
    author = authors(:one)
    assert_equal author.articles.first.id, articles(:one).id
  end
end
