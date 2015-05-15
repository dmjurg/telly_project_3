class User < ActiveRecord::Base

  has_and_belongs_to_many :shows
  has_many :friendships
  has_many :friends, :through => :friendships

  # Secure password features:
  has_secure_password

  validates :email, uniqueness: true

end
