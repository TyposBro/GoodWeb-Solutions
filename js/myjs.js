$('.nav-link').mouseenter(function() {
  $(this).css("background-color", " #ff6600");
  $(this).addClass("rounded-pill");
});
$('.nav-link').mouseleave(function() {
  $(this).css("background-color", "");
});

$(document).ready(function() {
  $('.active').css("background-color", " #ff6600");
  $(".active").addClass("rounded-pill");
  $('nav').css("background-color", "white");
});



// $('#about_01').click(function(){$(this).remove();},
// function(){$(".container mt-3 col-md-6").html('<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe></div>');})
