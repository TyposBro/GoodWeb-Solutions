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
