json.extract! track, :id, :title, :artist, :user_id, :updated_at
json.image_url asset_path(track.image.url(:thumb))
json.song_url asset_path(track.song.url)
json.poster track.user.username
json.num_likes track.num_likes
