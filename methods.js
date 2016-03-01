Meteor.methods({
	addFeedbacks: function(emoji, feed, timeSet, comment){
		FeedbacksList.insert({
			feedback: emoji,
			knowFrom: feed,
			createdAt: timeSet,
			username: Meteor.user().username,
			comment: comment
		});

	}
});
