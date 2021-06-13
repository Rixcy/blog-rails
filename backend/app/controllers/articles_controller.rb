class ArticlesController < ApplicationController
  before_action :set_article, only: %i[show update destroy]

  # GET /articles
  def index
    articles = Article.all

    @articles = articles.as_json(include: [{ author: { only: %i[id name avatar_url] } }, { category: { only: %i[id title colour] } }],
                                 except: %i[author_id category_id])

    json_response(@articles)
  end

  def index_by_category
    articles = Category.find(params[:id]).articles

    @articles = articles.as_json(include: [{ author: { only: %i[id name avatar_url] } }, { category: { only: %i[id title colour] } }],
                                 except: %i[author_id category_id])

    json_response(@articles)
  end

  # GET /articles/:id
  def show
    json_response(@article)
  end

  # POST /articles
  def create
    @article = Article.create!(article_params)
    json_response(@article, :created)
  end

  # PUT /articles/:id
  def update
    @article.update(article_params)
    head :no_content
  end

  # DELETE /articles/:id
  def destroy
    @article.destroy
    head :no_content
  end

  private

  def article_params
    params.permit(:title, :body, :category_id, :author_id)
  end

  def set_article
    @article = Article.find(params[:id])
  end
end
