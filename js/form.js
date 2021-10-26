$(document).ready(function () {

  const $submitBtn = $('#js-submit');

  $('#form input,#form textarea').on('change', function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="message"]').val() !== "" &&
      $('#form #privacyCheck').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);
      $submitBtn.removeClass("changed");

    } else {
      $submitBtn.prop('disabled', true);
      $submitBtn.addClass("changed");
    }
  });

});