class Api::TicketsController < ApplicationController
  def index
    @tickets = Ticket.all
  end

  def create
    @ticket = Ticket.new(event_id: params[:event_id])
    @ticket.user_id = current_user.id;
    if @ticket.save
        render :show
    else
      render json: @ticket.errors.full_messages, status: 422
    end
  end

  def destroy 
    @ticket = Ticket.find(params[:id])
    @ticket.destroy
    render :show
  end
end
