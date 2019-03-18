class Api::FoodsController < ApplicationController
  before_action :set_menu
  before_action :set_food, only: [:update, :destroy]

  def index
    render json: @menu.foods.all
  end

  def create
    food = @menu.foods.new(food_params)
    if food.save
      render json: food
    else
      render json: { errors: food.errors }, status: :unprocessable_entity
    end
  end

  def update
    @food.update(food_params)
    render json: @food
  end

  def destroy
    @food.destroy
    render json: { message: "Menu Item Deleted" }
  end

  private

  def set_menu
    @menu = Menu.find(params[:menu_id])
  end

  def set_food
    @food = Food.find(params[:id])
  end

  def food_params
    params.require(:food).permit(:name, :price)
  end
  
end
