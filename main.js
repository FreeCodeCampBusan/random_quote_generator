$(document).ready(function() {

  var quote;

  function getNewQuote() {
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(response) {
        quote = response.quoteText;
        $('#quote').text(response.quoteText);
        if (response.quoteAuthor) {
          $('#author').text('said by ' + response.quoteAuthor);
        } else {
          $('#author').text('- unkown');
        }
      }
    });
  }

  getNewQuote();

  $('.get-quote').on('click', function(e) {
    e.preventDefault();
    getNewQuote();
  });

  $('.share-quote').on('click', function(e) {
    e.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote));
  });

});
