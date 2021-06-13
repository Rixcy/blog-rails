class ArticlesController < ApplicationController
  before_action :set_article, only: %i[show update destroy]

  # GET /articles
  def index
    @articles = Article.all
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
