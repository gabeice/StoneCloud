class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user == current_user
      @user.update(user_params)
      render :show
    else
      render :show
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :profile_picture)
  end
end
