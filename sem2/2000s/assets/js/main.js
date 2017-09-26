$(document).ready(function() {


// Add jQuery here

$('.nav_ad').click(function(event){
  $('.item').addClass('hide');

  $('.item.ad').removeClass('hide')
  $('.item.ad').addClass('show');
});

$('.nav_brand').click(function(event){
  $('.item').addClass('hide');

  $('.item.brand').removeClass('hide')
  $('.item.brand').addClass('show');
  });

  $('.nav_mag').click(function(event){
    $('.item').addClass('hide');

    $('.item.mag').removeClass('hide')
    $('.item.mag').addClass('show');
    });

      $('.nav_trend').click(function(event){
        $('.item').addClass('hide');

        $('.item.trend').removeClass('hide')
        $('.item.trend').addClass('show');
        });

        $('.title').click(function(event){
          $('.item').addClass('hide');

          $('.item').removeClass('hide')
          $('.item').addClass('show');
          });




















  });
