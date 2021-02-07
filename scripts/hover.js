$('.two').mouseenter(function() {
  $('.two.blue').css('visibility', 'visible');
  $('.two.white').css('visibility', 'visible');
});

$('.two').mouseleave(
  function(){
    $('.two.blue').css('visibility', 'hidden');
    $('.two.white').css('visibility', 'hidden');
  }
);

$('.three').mouseenter(function() {
  $('.three.blue').css('visibility', 'visible');
  $('.three.white').css('visibility', 'visible');
});

$('.three').mouseleave(
  function(){
    $('.three.blue').css('visibility', 'hidden');
    $('.three.white').css('visibility', 'hidden');
  }
);