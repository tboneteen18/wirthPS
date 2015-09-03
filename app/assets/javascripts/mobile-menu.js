var ready;
ready = (function() {

  $('#mobile-menu').affix({
    offset: {
      top: 195
    }
  });
  $('#mobile-menu').on('affix.bs.affix', function () {
    var navHeight = $('.navbar').outerHeight(true);

    $('#mobile-menu + .container').css('margin-top', navHeight);
	});
  $('#mobile-menu').on('affix-top.bs.affix', function () {
    $('#mobile-menu + .container').css('margin-top', 0);
	});

  $('#sidebar').affix({
    offset: {
      top: 17
    }
  });

});

$(document).ready(ready);
$(document).on('page:load', ready);
