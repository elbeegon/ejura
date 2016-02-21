if (Meteor.isClient) {
	Template.register.events({
		'submit form': function(event, template) {
			event.preventDefault();
			var userVar = template.find('#username').value;
			var passwordVar = template.find('#password').value;
			Accounts.createUser({
				username: userVar,
				password: passwordVar
			});
		}
	});
}