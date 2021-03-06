class Post < ActiveRecord::Base
  attr_accessible :content, :title
  validates :title, :presence => true, :length => { :maximum => 70,
  	:too_long => "%{count} characters is the maximum allowed" }
  validates :content, :presence => true

  has_many :comments, dependent: :destroy

  def self.search(term)
  	where("content like :term or title like :term", term: "%#{term}%")
  end
end
