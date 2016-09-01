class Api::EventsController < ApplicationController
  
  def index
    @events = Event.all
    render json: @events
  end

  def create
    # @event = Event.create!(event_params)
    # if @event.save
    #   render :show
    # else
    #   render json: @event.errors.full_messages;
    # end

    @event = Event.new(event_params)
    if @event.save
        render :show
    else
      render json: @event.errors.full_messages;
    end
  end

  def show
    @event = Event.find(params[:id])
  end


  private

  def event_params
    params.require(:event).permit(:description, :locaiton, :date, :price, :tag, :title, :image_url)
  end
end
