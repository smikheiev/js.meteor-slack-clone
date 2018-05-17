Meteor.publish('allUsernames', () => {
	return Meteor.users.find({}, {
		fields: {
			'username': 1,
			'services.github.username': 1
		}
	});
});
