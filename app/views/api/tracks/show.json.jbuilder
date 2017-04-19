json.extract! @track, :id, :title, :user_id
json.image_url asset_path(@track.image.url)
