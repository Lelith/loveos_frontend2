class WelcomeController < ApplicationController
  def index
  	render component: 'WelcomeIndex'
  end
end
