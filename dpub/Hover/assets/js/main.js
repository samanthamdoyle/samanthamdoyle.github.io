$(document).ready(function() {

  $('.number').mouseenter(function() {
    $('.footnote').addClass('showme');
  });

  $('.number').mouseleave(function() {
   $('.footnote').removeClass('showme');
 });

 $('.subheading').mouseenter(function() {
   $('.highlight').addClass('showme');
 });

 $('.subheading').mouseleave(function() {
  $('.highlight').removeClass('showme');
});

$('.thumbnail').click(function() {
  $(this).toggleClass('enlarge');
});







});
