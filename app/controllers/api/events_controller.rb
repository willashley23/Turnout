class Api::EventsController < ApplicationController
  
  def index
    @events = Event.all
  end

  def create
    @event = Event.new(event_params)
    debugger
    if @event.save
        render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def show
    @event = Event.find(params[:id])
  end


  private

  def event_params
    params.require(:event).permit(:description, :location, :date, :price, :tag, :title, :image_url, :author_id)
  end
end
