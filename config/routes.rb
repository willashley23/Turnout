Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :events, only: [:index, :show, :create]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :bookmarks, only: [:create, :destroy, :index, :show]
  end
  root "static_pages#root"
end

#change user resource to resources
