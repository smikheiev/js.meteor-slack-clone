Template.message.helpers({
	usernameFromId: function(userId) {
		const user = Meteor.users.findOne({_id: userId});
		if (!user) {
			return 'Anonymous';
		}
		if (user.services.github) {
			return user.services.github.username;
		}
		return user.username;
	}
});
