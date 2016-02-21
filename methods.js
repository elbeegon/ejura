Meteor.methods({
	addFeedbacks: function(emoji, feed, timeSet){
		FeedbacksList.insert({
			feedback: emoji,
			knowFrom: feed,
			createdAt: timeSet,
			username: Meteor.user().username
		});

	}
});
