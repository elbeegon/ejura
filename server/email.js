Meteor.startup(function() {
	process.env.MAIL_URL = 'smtp://karolis@pretendentas.lt:password@lamstas.serveriai.lt:465' ;	
});

Meteor.methods({
	sendEmail: function (to, from, subject, text) {
		Email.send({
			to: to,
			from: from,
			subject: subject,
			text: text
		});
	}
});
