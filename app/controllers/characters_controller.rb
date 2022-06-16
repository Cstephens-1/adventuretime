class CharactersController < ApplicationController
    skip_before_action :confirm_authentication
    def index
        characters = Character.all 
        render json: characters
      end

      def create 
        character = Character.new(char_name: params[:char_name], savepoint: params[:savepoint], user_id: params[:user_id])
        if character.save
            render json: character, status: :created
        else
            render json: {error: "character has not been created"}
        end


    end

    def destroy
        character = Character.find_by(id: params[:id])
        character.destroy;
        head :no_content
    end

    private
    def character_params
        params.permit(:char_name, :savepoint, :user_id)
    end
end
