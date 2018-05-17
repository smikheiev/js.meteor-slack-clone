Template.registerHelper('usernameFromId', (userId) => {
	const user = Meteor.users.findOne({_id: userId});
	if (!user) {
		return 'Anonymous';
	}
	if (user.services.github) {
		return user.services.github.username;
	}
	return user.username;
});

Template.registerHelper('timestampToTime', (timestamp) => {
	const date = new Date(timestamp);
	const hours = date.getHours();
	const minutes = '0' + date.getMinutes();
	const seconds = '0' + date.getSeconds();

	return `${hours}:${minutes.substr(minutes.length - 2)}:${seconds.substr(seconds.length - 2)}`;
});
