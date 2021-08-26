
class Api::TodosController < ApplicationController
    
    def index
        
        @todos = Todo.all
        render json: @todos

    end

    def show
        render json: Todo.find(params[:id])
      end


      def update

        @todo = Todo.find_by(id: params[:id])

        if @todo.update(todo_params)
            render json: @todo
        else
            render json: @todo.errors.full_messages, status: 422
        end
        
      end

      
      def create
         
        @todo = Todo.new(todo_params)
        if @todo.save
            render json: @todo
        else
            render json: @todo.errors.full_messages, status: 422
        end
    end

    def destroy

        @todo = Todo.find_by(id: params[:id])
        @todo.destroy  @todo = Todo.find_by(id: params[:id])
      
    end

    private

    def todos_params
        params.require(:todo).permit(:title, :body, :done)
    end
end