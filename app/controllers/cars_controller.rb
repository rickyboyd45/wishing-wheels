class CarsController < ApplicationController
  before_action :set_car, only: :show
  before_action :authorize_request, only: :create
  before_action :set_user_car, only: [:update, :destroy]

  # GET /cars
  def index
    @cars = Car.all

    render json: @cars
  end

  # GET /cars/1
  def show
    render json: @car
  end

  # POST /cars
  def create
    @car = Car.new(car_params)
    @car.user = @current_user
    if @car.save
      render json: @car, status: :created
    else
      render json: @car.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cars/1
  def update
    if @car.update(car_params)
      render json: @car
    else
      render json: @car.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cars/1
  def destroy
    @car.destroy
  end

  # def add_car
  #   @car = Car.find(car_params[:car_id])
  # end

  # render json: @car

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_car
      @car = Car.find(params[:id])
    end

    def set_user_car
      @car = @current_user.cars.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def car_params
      params.require(:car).permit(:make, :model, :year, :content, :img_url)
    end
end
