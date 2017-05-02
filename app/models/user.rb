# == Schema Information
#
# Table name: users
#
#  id                           :integer          not null, primary key
#  username                     :string           not null
#  password_digest              :string           not null
#  session_token                :string           not null
#  created_at                   :datetime         not null
#  updated_at                   :datetime         not null
#  profile_picture_file_name    :string
#  profile_picture_content_type :string
#  profile_picture_file_size    :integer
#  profile_picture_updated_at   :datetime
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, uniqueness: true

  has_attached_file :profile_picture, default_url: "missing_profile.jpg", styles: { original: { geometry: "2000x2000#"} }
  validates_attachment_content_type :profile_picture, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token

  has_many :posted_songs,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'Track'

  has_many :comments,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'Comment'

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && BCrypt::Password.new(user.password_digest).is_password?(password)
    nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end
end
