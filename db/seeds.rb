# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
tom = User.create(username:"Tom", password: "123")
mark = User.create(username:"Mark", password: "123")

lader = Character.create(char_name:"Lader", savepoint:"1", user_id: tom.id)
kader = Character.create(char_name:"kader", savepoint: "0", user_id: mark.id)
thorby = Character.create(char_name:"Thorby", savepoint: "0", user_id: tom.id)

vampire = Enemy.create(name: "Thrall", health: "250")
wyrm=Enemy.create(name:"Dragon", health:"5000")