Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :categories
  resources :authors
  resources :articles

  get 'categories/:id/articles', to: 'articles#index_by_category'
end
