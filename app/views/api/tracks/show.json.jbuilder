json.extract! @track, :id, :title, :user_id
json.image_url asset_path(@track.image.url)
json.song_url asset_path(@track.song.url)
json.poster @track.user.username
