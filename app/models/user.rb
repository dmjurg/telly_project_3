class User < ActiveRecord::Base

  has_and_belongs_to_many :shows, -> { uniq }
  has_many :friendships
  has_many :friends, :through => :friendships

  # Secure password features:
  has_secure_password

  validates :email, uniqueness: true

  def add_favorite(show)
    if self.shows.include?(show)
      return false
    else
      self.shows << show
    end
  end

end
