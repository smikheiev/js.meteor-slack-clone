Meteor.startup(() => {
	Factory.define("message", Messages, {
		text: () => Fake.sentence()
	});

	Messages.remove();

	if (Messages.find().count() === 0) {
		_(5).times(() => {
			Factory.create("message");
		});
	}
});