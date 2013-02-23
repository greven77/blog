Blog::Application.routes.draw do
  scope "api" do
    resources :posts
  end

  root to: "main#index"
end
