FeedbacksList = new Mongo.Collection("feedbacks");

if (Meteor.isClient) {
	Template.hello.events({
		
		"click button": function (event) {
			// Prevent default browser form submit
			event.preventDefault();

			// Get value from image element
			var emoji = event.target.alt;
			console.log(emoji);
			
			// Set Session from emotion click
			Session.set("emotion", emoji);

			// Go to info.html page
			Router.go('/info');
		}
	});

}