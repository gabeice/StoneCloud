class Api::TracksController < ApplicationController
  def create
  end

  def update
  end

  def destroy
  end

  def show
    @track = Track.find(params[:id])
  end
end
