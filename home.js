if (Meteor.isClient) {
    Template.home.events({
        'click .logout': function(event) {
            event.preventDefault();
            Meteor.logout();
        }
    });
}
