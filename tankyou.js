if (Meteor.isClient) {
	Template.thankyou.onRendered(function () {
		Meteor.setTimeout(function() {
			Router.go('/');
		}, 3000);
	});
}