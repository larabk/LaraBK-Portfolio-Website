$(document).ready(function () {

    
    // JS for portfolio clickable divs
    $('.box1').click(function () {
      window.open($(this).find('a:first').attr('href'));
      return false;
    });
  

    $('.box1').click(function () {
      window.location = $(this).find('a:first').attr('href');
      return false;
    });
  

    $('.box1').hover(
      function () {
        window.status = $(this).find('a:first').attr('href');
      },
      function () {
        window.status = '';
      }
    );
});