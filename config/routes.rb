Blog::Application.routes.draw do

  get "posts/index"

  devise_for :users, :controllers => {
    :registrations => "registrations",
    :omniauth_callbacks => "users/omniauth_callbacks"
  }

  resources :search_suggestions

  namespace :admin do
    root :to => "base#index"
    resources :users do
      resources :posts
    end

    resources :posts 
  end

  scope "api" do
    resources :posts do
      resources :comments
    resources :users 
    end
  end

  resources :posts do
    resources :comments
  end

  root to: "main#index"

  match "posts/:id" => 'main#index'

  match 'index' => 'home#index'
end