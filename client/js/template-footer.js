Template.footer.events({
	'keypress input': (event) => {
		if (event.charCode === 13) {
			const inputValue = $('.input-box_text').val();

			if (!!inputValue) {
				event.stopPropagation();

				Meteor.call('newMessage', {text: inputValue});

				$('.input-box_text').val("");

				return false;
			}
		}
	}
});
