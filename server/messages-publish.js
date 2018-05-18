Meteor.publish('messages', (channel) => {
	return Messages.find({
		channel
	});
});
