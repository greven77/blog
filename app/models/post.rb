class Post < ActiveRecord::Base
  attr_accessible :content, :title
  validates :title, :presence => true, :length => { :maximum => 70,
  	:too_long => "%{count} characters is the maximum allowed" }
  validates :content, :presence => true
end
