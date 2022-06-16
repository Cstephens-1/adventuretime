class EnemiesController < ApplicationController
    skip_before_action :confirm_authentication
    def index 
        enemies = Enemy.all
        render json: enemies
    end

    def show
        enemy=Enemy.find_by(id: params[:id])
        render json: enemy
    end

    def update 
        enemy = Enemy.find_by(id: params[:id])
        if enemy
            enemy.update(health: params[:health])
            render json: enemy
        else
            render json: {error: "enemy doesn't exist"}
        end
    end


    def enemy_params
        params.permit(:name, :health)
    end


end
