Template.messages.helpers({
	messages: Messages.find()
});

Template.messages.onCreated(function() {
	this.autorun(() => {
		this.subscribe('messages', Session.get('channel'));
	});
});
