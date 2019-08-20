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


var loader;
function loadNow(opacity){
  if (opacity <= 0){
    displayContent();
  }
  else {
    loader.style.opacity = opacity;
    window.setTimeout(function(){
      loadNow(opacity - 0.05)
    }, 100);
  }
}
function displayContent(){
  loader.style.display = 'none';
  document.getElementById('content').style.display = 'block';
  document.addEventListener("DOMContentLoader", function(){
    loader = document.getElementById("loader");
    loadNow(1);
  })
}


// $('#about_01').click(function(){$(this).remove();},
// function(){$(".container mt-3 col-md-6").html('<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe></div>');})
