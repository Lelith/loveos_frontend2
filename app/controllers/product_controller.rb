class ProductController < ApplicationController
  def show
  	render component: 'ProductShow'
  end
end
