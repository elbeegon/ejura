// home layout configuration

// Router.onBeforeAction(function() {
//   if (! Meteor.userId()) {
//     this.render('register');
//   } else {
//     this.next();
//   }
// });

Router.configure({
    layoutTemplate: 'home'
});

// Route index.html layout
Router.route('/', function() {
  this.render('hello');
});

Router.route('/register', {
	name: 'register'
});

// Render info.html layout
Router.route('/info', {
	name: 'info'
});

// Render thankyou.html layout
Router.route('/thankyou', {
	name: 'thankyou'
});