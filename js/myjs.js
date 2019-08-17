$('.nav-link').mouseenter(function(){
    $(this).css("background-color", " #ff6600");
    $(this).addClass("rounded-pill");
  });
  $('.nav-link').mouseleave(function(){
      $(this).css("background-color", "");
    });

$('div').unload(function(){
  $(this).addClass("spinner-grow text-warning");
});
