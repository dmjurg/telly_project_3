class ShowsController < ApplicationController

  def index
    @shows = Show.all
  end

  def show
    @show = Show.find(params[:id])
  end

  def favorite
    @show = Show.find_by(api_id: params[:show][:apiId])
    if @show.nil?
      @show = Show.new
      @show.name = params[:show][:name]
      @show.api_id = params[:show][:apiId]
      @show.first_air_date = params[:show][:date]
      @show.save
    end
    current_user.shows << @show
    render json: @show
  end

  def unfavorite
    @show = Show.find(params[:id])
    current_user.shows.delete(@show)
    redirect_to current_user
  end

end
