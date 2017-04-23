class Api::TracksController < ApplicationController
  before_action :ensure_login, except: [:show, :index]

  def create
    @track = Track.new(track_params)
    @track.user_id = current_user.id

    if @track.save
      render :show
    else
      render json: @track.errors, status: 422
    end
  end

  def update
    @track = Track.find(params[:id])
    if @track.update(track_params)
      render :show
    else
      render json: @track.errors, status: 422
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
    render :show
  end

  def show
    @track = Track.find(params[:id])
  end

  def index
    if params[:search]
      @tracks = Track.search_filter(params[:search])
    else
      @tracks = Track.all
    end
  end

  private
  def track_params
    params.require(:track).permit(:title, :image, :song, :artist)
  end
end
