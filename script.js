$ (document).ready(function(){
	function getNewQuote (){
		var quote;
		var author;

		$.ajax({
			url: '//api.forismatic.com/api/1.0/',
			jsonp: 'jsonp',
			dataType: 'jsonp',
			data: {
				method: 'getQuote',
				lang: 'en',
				format: 'jsonp',
			},
			success: function(response){
				quote = response.quoteText;
				author = response.quoteAuthor;
				$('#quote').text(quote);

				if (author) {
					$("#author").text('- ' + author);
				} else {
					$("#author").text('-unknown');
				}
			}

		});

	}
	//getNewQuote();

	$("button").click(function(){
			getNewQuote();
		});
});
