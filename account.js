if (Meteor.isClient) {
	// Account tab settings
	Template.account.created = function() {
		this.currentTab = new ReactiveVar('login');

		this.currentTabIs = function (tabName) {
			return tabName === Template.instance().currentTab.get();
		}
	};

	Template.account.helpers({
		currentTabIs: function (tabName) {
			return Template.instance().currentTabIs(tabName);
		},
		selectedIfCurrentTabIs: function (tabName) {
			if (Template.instance().currentTabIs(tabName)) {
				return 'selected';
			} else {
				return '';
			}
		}
	});

	Template.account.events({
		'click .tab-link': function (event, template){
			event.preventDefault();
			var $tabLink = $(event.currentTarget);
			var tabName = $tabLink.data('tab-name');

			template.currentTab.set(tabName || 'login');
		}
	});


	// Register
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

	// Login
	Template.login.events({
		'submit form': function(event, template) {
			event.preventDefault();
			var userVar = template.find('#username-login').value;
			var passwordVar = template.find('#password-login').value;
			Meteor.loginWithPassword(userVar, passwordVar);
		}
	});
}
