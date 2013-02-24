class Comment < ActiveRecord::Base
  attr_accessible :author, :content

  validates :author, :presence => true, :length => { :maximum => 100,
  	:too_long => "%{count} characters is the maximum allowed" }
  validates :content, :presence => true

  belongs_to :post
end
