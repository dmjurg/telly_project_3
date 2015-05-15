Rails.application.routes.draw do

  root to: 'welcome#index'

  get 'signup', to: 'users#new', as: 'signup'
  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'
    #chaging user state but no perm damage

  resources :users
  resources :shows do
    post 'favorite', on: :collection
    post 'unfavorite', on: :member
  end
  resources :seasons
  resources :friendships
  resources :sessions

end
