$(document).ready(function() {

  setTimeout(function () {
    $('.first').addClass('addred');
  }, 1000);

  setTimeout(function () {
    $('.second').addClass('addred');
  }, 1500);

  setTimeout(function () {
    $('.third').addClass('addred');
  }, 2000);

  setTimeout(function () {
    $('.forth').addClass('addred');
  }, 2500);

  setTimeout(function () {
    $('.fifth').addClass('addred');
  }, 3000);

setTimeout(function () {
  $('.first').removeClass('addred');
}, 3500);

setTimeout(function () {
  $('.second').removeClass('addred');
}, 4000);

setTimeout(function () {
  $('.third').removeClass('addred');
}, 4500);

setTimeout(function () {
  $('.forth').removeClass('addred');
}, 5000);

setTimeout(function () {
  $('.fifth').removeClass('addred');
}, 5500);

  });
