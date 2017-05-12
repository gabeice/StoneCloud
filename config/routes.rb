Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:create, :show, :update, :destroy, :index]
    resources :comments, only: [:create, :destroy]
    resource :likes, only: [:create]
    resources :playlists, only: [:create, :destroy, :show, :update]
    resources :playlist_items, only: [:create, :destroy]
  end
end
