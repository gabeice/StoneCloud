json.partial! '/api/users/user', user: @user

json.posted_songs do
  json.array! @user.posted_songs do |song|
    json.partial! '/api/tracks/track', track: song
  end
end
