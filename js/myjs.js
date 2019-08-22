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

var td1, td2, td3, td4 = 0;
while (td1 < 1200) {
  td1 ++;
  document.getElementById("td1").innerHTML = td1;
}
while (td1 < 3210) {
  td1 ++;
  document.getElementById("td2").innerHTML = td2;
}
while (td1 < 3781) {
  td1 ++;
  document.getElementById("td3").innerHTML = td3;
}
while (td1 < 4300) {
  td1 ++;
  document.getElementById("td4").innerHTML = td4;
}

document.getElementById("td2").innerHTML = td2;
document.getElementById("td3").innerHTML = td3;
document.getElementById("td4").innerHTML = td4;
// $('#about_01').click(function(){$(this).remove();},
// function(){$(".container mt-3 col-md-6").html('<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe></div>');})
