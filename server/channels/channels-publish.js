Meteor.publish('channels', () => {
	return Channels.find();
});
