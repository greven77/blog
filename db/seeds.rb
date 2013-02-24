Post.delete_all
Post.create!(title: "Matz", content: "Lorem Ipsum bla bla bla")
Post.create!(title: "Yehuda Katz", content: "Lorem Ipsum bla bla bla")
Post.create!(title: "DHH", content: "Lorem Ipsum bla bla bla")
Post.create!(title: "Jose Valim", content: "Lorem Ipsum bla bla bla")
Post.create!(title: "Dr Nic", content: "Lorem Ipsum bla bla bla")
Post.create!(title: "John Nunemaker", content: "Lorem Ipsum bla bla bla")
Post.create!(title: "Aaron Patterson", content: "Lorem Ipsum bla bla bla")
Post.all.each do |post|
	10.times do |x|
		comment = Comment.create(:author => "john#{x}", :content => "Lorem Ipsum zalgo cthulhu")
		post.comments << comment
	end
end