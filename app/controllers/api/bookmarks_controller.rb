class Api::BookmarksController < ApplicationController
  

  def index
    @bookmarks = Bookmark.all
  end

  def create
    @bookmark = Bookmark.new(event_id: params[:event_id])
    @bookmark.user_id = current_user.id;
    # debugger
    if @bookmark.save
        render :show
    else
      render json: @bookmark.errors.full_messages, status: 422
    end
  end

  def destroy 
    @bookmark = Bookmark.find(params[:id])
    @bookmark.destroy
    render :show
  end

end
