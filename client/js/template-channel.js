Template.channel.events({
	'click .channel': function(e) {
		Session.set('channel', this.name);
	}
});

Template.channel.helpers({
	active: function() {
		if (Session.get('channel') === this.name) {
			return "active";
		}
		else {
			return "";
		}
	}
});
