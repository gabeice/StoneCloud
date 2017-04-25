# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Track.destroy_all

users = User.create([
  {
    username: 'mickjagger',
    password: 123456,
    profile_picture: File.open("app/assets/images/profile_pictures/Mick_Jagger.jpg")
  },

  {
    username: "keithrichards",
    password: 123456,
    profile_picture: File.open("app/assets/images/profile_pictures/Keith_Richards.jpg")
  },

  {
    username: "charliewatts",
    password: 123456,
    profile_picture: File.open("app/assets/images/profile_pictures/Charlie_Watts.jpg")
  },

  { username: "ronniewood", password: 123456 },
  { username: "micktaylor", password: 123456 },
  { username: "brianjones", password: 123456 },
  { username: "ianstewart", password: 123456 },
  { username: "billwyman", password: 123456 }
])

tracks = Track.create([
  {
    title: "Happy",
    user_id: User.find_by(username: "keithrichards").id,
    image: File.open("app/assets/images/album_covers/Exile_on_Main_St.jpg"),
    song: File.open("app/assets/music/Happy.mp3")
  },

  {
    title: "Midnight Rambler",
    user_id: User.find_by(username: "mickjagger").id,
    image: File.open("app/assets/images/album_covers/Let_It_Bleed.jpg"),
    song: File.open("app/assets/music/Midnight_Rambler.mp3")
  },

  {
    title: "Hang Fire",
    user_id: User.find_by(username: "charliewatts").id,
    image: File.open("app/assets/images/album_covers/Tattoo_You.jpg"),
    song: File.open("app/assets/music/Hang_Fire.mp3")
  },

  {
    title: "Gimme Shelter",
    user_id: User.find_by(username: "mickjagger").id,
    image: File.open("app/assets/images/album_covers/Let_It_Bleed.jpg"),
    song: File.open("app/assets/music/Gimme_Shelter.mp3")
  },

  {
    title: "Let It Loose",
    user_id: User.find_by(username: "billwyman").id,
    image: File.open("app/assets/images/album_covers/Exile_on_Main_St.jpg"),
    song: File.open("app/assets/music/Let_It_Loose.mp3")
  },

  {
    title: "Heart Full of Soul",
    user_id: User.find_by(username: "micktaylor").id,
    artist: "The Yardbirds",
    image: File.open("app/assets/images/album_covers/Having_a_Rave_Up.jpeg"),
    song: File.open("app/assets/music/Heart_Full_of_Soul.mp3")
  },

  {
    title: "Peace Frog",
    user_id: User.find_by(username: "ianstewart").id,
    artist: "The Doors",
    image: File.open("app/assets/images/album_covers/Morrison_Hotel.jpg"),
    song: File.open("app/assets/music/Peace_Frog.mp3")
  },

  {
    title: "(I Can't Get No) Satisfaction",
    user_id: User.find_by(username: "billwyman").id,
    image: File.open("app/assets/images/album_covers/Out_of_Our_Heads.jpg"),
    song: File.open("app/assets/music/Satisfaction.mp3")
  },

  {
    title: "Heart of Glass",
    user_id: User.find_by(username: "charliewatts").id,
    artist: "Blondie",
    image: File.open("app/assets/images/album_covers/Parallel_Lines.jpg"),
    song: File.open("app/assets/music/Heart_of_Glass.mp3")
  }])
