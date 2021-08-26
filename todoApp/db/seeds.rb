# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
    Todo.destroy_all

    wash_car = Todo.create!(title: 'Wash Car', body: 'With Soap' , done: false)
    wash_dishes = Todo.create!(title: 'Wash Dishes' , body: 'With Water' , done: true)
    wash_clothes = Todo.create!(title: 'Wash Clothes' , body: 'Go to laundry', done: false)
    buy_milk = Todo.create!(title: 'Buy Milk', body: 'Whole Milk!', done: true)
end