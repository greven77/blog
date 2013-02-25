class User < ActiveRecord::Base
	module OmniauthCallbacks
		def find_or_create_for_twitter(response)
			data = response['extra']['user_hash']
			if user = User.find_by_twitter_id(data["id"])
				user
			else
				user = User.new(:email => "twitter+#{data["id"]}@example.com",
								:password => Devise.friendly_token[0,20])
				user.twitter_id = data["id"]
				user.twitter_screen_name = data["screen_name"]
				user.twitter_display_name = data["display_name"]
				user.confirm!
				user
			end
		end

		def find_or_create_for_github(response)
			data = response['extra']['raw_info']
			if user = User.find_by_github_id(data["id"])
				user
			else
				user = User.new(:email => "github+#{data["id"]}@example.com",
								:password => Devise.friendly_token[0, 20])
				user.github_id = data["id"]
				user.github_user_name = data["login"]
				user.github_display_name = data["name"]
				user.save
				user
			end		
		end	
	end
end