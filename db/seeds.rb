# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Track.destroy_all

users = User.create([{ username: 'mickjagger', password: 123456 },
  { username: "keithrichards", password: 123456 },
  { username: "charliewatts", password: 123456 },
  { username: "ronniewood", password: 123456 },
  { username: "micktaylor", password: 123456 },
  { username: "brianjones", password: 123456 },
  { username: "ianstewart", password: 123456 },
  { username: "billwyman", password: 123456 }])

tracks = Track.create([{ title: "Happy", user_id: User.find_by(username: "keithrichards").id },
  { title: "Midnight Rambler", user_id: User.find_by(username: "mickjagger").id },
  { title: "Hang Fire", user_id: User.find_by(username: "charliewatts").id },
  { title: "Gimme Shelter", user_id: User.find_by(username: "mickjagger").id },
  { title: "Let It Loose", user_id: User.find_by(username: "mickjagger").id }])
