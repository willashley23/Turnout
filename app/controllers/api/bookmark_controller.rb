class Api::BookmarkController < ApplicationController
  

  def index
    @bookmarks = Bookmark.all
  end

  def create
    @bookmark = Bookmark.new(bookmark_params)
    if @bookmark.save
        render :show
    else
      render json: @bookmark.errors.full_messages, status: 422
    end
  end

  private

  def bookmark_params
    params.require(:bookmark).permit(:user_id, :event_id)
  end
end
