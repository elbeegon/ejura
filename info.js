if (Meteor.isClient) {
	Template.info.helpers({
		listKnowFrom: function(){
			return ['facebook', 'google', 'spauda', 'draugai', 'kita']
		}
	});
	Template.info.events({
		"click button": function (event) {
			// Prevent default browser form submit
			event.preventDefault();

			// Get value from image element
			var knowFrom = event.currentTarget.getAttribute("name");
			Session.set("backFrom", knowFrom);

			// Set Time
			var setTime = new Date();
			Session.set("timeis", setTime)

			// Get Sessions
			var timeSet = Session.get('timeis')
			var emotionSet = Session.get('emotion');
			var backFromSet = Session.get('backFrom');

			if(knowFrom == 'kita') {
				Router.go('/comment');
			} else {
				// Call method
				Meteor.call("addFeedbacks", emotionSet, backFromSet, timeSet);
				if (emotionSet == 'bad' || emotionSet == 'sad') {
					// In your client code: asynchronously send an email
					Meteor.call('sendEmail', 'karolis.arbaciauskas@gmail.com', 'karolis@pretendentas.lt', 'Hello from Meteor!', 'This is a test email from ' + Meteor.user().username + ' with '+ emotionSet +' feedback, laikas: '+ setTime);

					// Reset Session keys
					Session.keys = {}

					Router.go('/thankyou');
				}
			}
		}
	});
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		console.log('running watchers');

		// simple watching of collection:
		new Mongo2ES({
			collectionName: 'feedbacks',
			ES: {
				host: Meteor.settings.elasticsearchHost,
				index: 'feedbacks',
				type: 'suggestions'
			}
		});
	});
}
