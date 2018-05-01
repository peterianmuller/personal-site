$(document).ready(function() {
	$('.btn').click(function() {
		let userInput = $('.user-input').val();
		$('.user-input').val('loading. . .');
		$.ajax({
			method: 'GET',
			data: {
				q: userInput,
				restrict_sr: 'true'
			},
			url: 'https://www.reddit.com/r/aww/search.json',
			success: function(response) {
				let pics = response.data.children;
				$('.user-input').val('');
				pics.forEach(function(pic) {
					console.log(pic.data);
					var img = $('<img id="dynamic">').attr('src', pic.data.thumbnail);
					$('.list').append(img);
				});
			}
		});
	});
});
