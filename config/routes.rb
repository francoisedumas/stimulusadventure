Rails.application.routes.draw do
  resources :items
  root to: 'pages#home'
end
