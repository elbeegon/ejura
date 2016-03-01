Router.onBeforeAction(function() {
    if (!Meteor.userId() && !Meteor.loggingIn()) {
        this.render('index');
        // this.layoutTemplate('indexTemplate');
    } else {
        this.next();
    }
});

// Route index.html layout
Router.route('/', function () {
  this.render('hello');
});

// Render info.html layout
Router.route('/info', function () {
	this.render('info');
});

// Render comment.html layout
Router.route('/comment', function () {
	this.render('comment');
});

// Render thankyou.html layout
Router.route('/thankyou', function () {
	this.render('thankyou');
});

Router.configure({
    layoutTemplate: 'home',
    // indexTemplate: 'index'
});
