Rails.application.routes.draw do
  get 'product/show'

  get 'list/index'

  get 'welcome/index'

  resources :list, only: :index

  resources :product, only: :show

  root 'welcome#index'
end
