Template.footer.events({
	'keypress input': (event) => {
		if (event.charCode === 13) {
			const inputValue = $('.input-box_text').val();

			if (!!inputValue) {
				event.stopPropagation();

				Messages.insert({
					text: inputValue,
					user: Meteor.userId(),
					timestamp: Date.now()
				});

				$('.input-box_text').val("");

				return false;
			}
		}
	}
});
