require 'test_helper'

class ArticleTest < ActiveSupport::TestCase
  test 'validates presence of title' do
    article = articles(:one)

    article.title = nil
    assert_not article.valid?

    article.title = 'Test'
    assert article.valid?
  end

  test 'validates length and presence of body' do
    article = articles(:one)

    article.body = nil
    assert_not article.valid?

    article.body = 'test'
    assert_not article.valid?

    article.body = 'this is over ten characters long'
    assert article.valid?
  end

  test 'validates presence of author' do
    article = articles(:one)

    article.author = nil
    assert_not article.valid?

    article.author = authors(:two)
    assert article.valid?
  end

  test 'has relationship with author set up' do
    article = articles(:one)

    article.author = authors(:two)
    assert_equal article.author.id, authors(:two).id
  end

  test 'validates presence of category' do
    article = articles(:one)

    article.category = nil
    assert_not article.valid?

    article.category = categories(:two)
    assert article.valid?
  end

  test 'has relationship with categories set up' do
    article = articles(:one)

    article.category = categories(:two)
    assert_equal article.category.id, categories(:two).id
  end
end
