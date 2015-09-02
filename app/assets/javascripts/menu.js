var ready;
ready = (function() {

  $('#nav').affix({
    offset: {
      top: 40
    }
  });
  $('#nav').on('affix.bs.affix', function () {
    var navHeight = $('.navbar').outerHeight(true);

    $('#nav + .container').css('margin-top', navHeight);
	});
  $('#nav').on('affix-top.bs.affix', function () {
    $('#nav + .container').css('margin-top', 0);
	});

  $('#sidebar').affix({
    offset: {
      top: 17
    }
  });

});

$(document).ready(ready);
$(document).on('page:load', ready);
