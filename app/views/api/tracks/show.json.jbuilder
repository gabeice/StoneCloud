json.partial! '/api/tracks/track', track: @track

json.comments do
  json.array! @track.comments do |comment|
    json.extract! comment, :id, :body, :created_at
    json.user do
      json.partial! '/api/users/user', user: comment.user
    end
  end
end
