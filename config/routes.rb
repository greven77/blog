Blog::Application.routes.draw do

  scope "api" do
    resources :posts do
      resources :comments
    end
  end

  resources :posts do
    resources :comments
  end

  root to: "main#index"

  match "posts/:id" => 'main#index'

  match 'index' => 'home#index'
end
