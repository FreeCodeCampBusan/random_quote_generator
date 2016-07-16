# Random Quote Generator

## Introduction

In this series of videos, I will show you how to make a random quote generator from scatch! This project uses HTML, CSS, Bootstrap, and jQuery. You will learn what APIs are and how to make GET requests using the `$.ajax` method in jQuery.

This is one of the projects required for the Front End Certificate at [Free Code Camp](http://freecodecamp.com). As such, you should make every attempt to do this project on your own or with a partner. **DO NOT** merely copy this code without understanding what it is or what it does. You'll only be cheating yourself, which will hurt you down the road later.

## Gotchas!

When I did this project months ago, I ran into several problems that caused me hours of grief and headaches. I want you to avoid these problems so that you can spend more time focusing on the fun stuff.

**Fixing Issues with Spacing and Alignment in Font Awesome Icons**

First of all, Font Awesome is just a CSS file. They're like Bootstrap's native Glyphicons, but there are a ton of amazing icons that you can use for free. There's no magic to it, but it won't work unless you include it in between your `<head>` tags with the rest of your CSS files.

It's possible to add Font Awesome icons to buttons, but because the icons have different widths, it might throw off the alignment of some of the buttons. To remedy this, just add the class `fa-fw` to ensure the icons have a fixed-width.

`<a href="#" class="btn btn-default btn-lg get-quote"><i class="fa fa-quote-left fa-fw"></i>Get Quote</a>`

**Page Jumps to the Top When I Click Buttons**

When you are dealing with forms and buttons, the browser might do something unintended like reload the page or make the page "jump" to the top. It is very easy to prevent this unwanted behavior. Just give your click event handler a callback function with an argument, and then call the `preventDefault()` method on that argument.

``` javascript
$('.get-quote').on('click', function(event) {
  event.preventDefault();
  // more code here ...
});
```

You can also do the same thing thing this way:

``` javascript
$('.get-quote').click(function(event) {
  event.preventDefault();
  // more code here ...
});
```

**Accessing Funky APIs**

The Forismatic API that we used in this project is a little funky. The documentation is not great at all, and if we try to request regular JSON data using Google Chrome, it is going to throw an error. For most APIs that you will use, the documentation is going to be so much better and you won't have any issues with accessing JSON data. With Forismatic, you need to use JSONP. Read more about it here: http://stackoverflow.com/questions/2067472/what-is-jsonp-all-about

In any case, always `console.log` your API response to see any possible errors. If your website isn't working, logging to the console will tell you how to fix something 99% of the time!

``` javascript
$.ajax({
  url: 'http://api.forismatic.com/api/1.0/',
  jsonp: 'jsonp', // we need this for Forismatic
  dataType: 'jsonp', // this too

  // these keys build one complete API endpoint
  data: {
    method: 'getQuote',
    lang: 'en',
    format: 'jsonp'
    // which results in http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp 
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
```
}
