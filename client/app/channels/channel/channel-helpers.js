Template.channel.helpers({
	active: function(name) {
		if (Session.get('channel') === name) {
			return 'active';
		}
		else {
			return '';
		}
	}
});
