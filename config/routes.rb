Blog::Application.routes.draw do
  scope "api" do
    resources :posts
  end

  resources :posts

  root to: "main#index"

  match "posts/:id" => 'main#index'

  match 'index' => 'home#index'
end
