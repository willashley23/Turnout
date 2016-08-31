class Api::EventsController < ApplicationController
  
  def index
    @events = Event.all
    render json: @events
  end

  def create
    @event = Event.create!(event_params)
    redirect_to "api/events"
  end

  def show
    @event = Event.find(params[:id])
  end


  private

  def event_params
    params.require(:event).permit(:description, :locaiton, :date, :price, :tag, :title, :image_url)
  end
end
