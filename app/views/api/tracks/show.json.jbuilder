json.partial! 'track', track: @track

json.comments do
  json.array! @track.comments do |comment|
    json.extract! comment, :id, :body
    json.partial! '/api/users/user', user: comment.user
  end
end
