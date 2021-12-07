$(document).on('click', "#modal-open", function(){
    // overlay作成
    $(this).blur();
    if($("#modal-overlay")[0]) return false;
    $(".global-container").append('<div id="modal-overlay"></div>');
    $("#modal-overlay").fadeIn("slow");
    $("#modal-content").fadeIn("slow");
    $("body").addClass("overlay");
	}
);

$(document).on('click', "#modal-overlay,.remove-btn", function(){
  $("#modal-content,#modal-overlay").fadeOut("slow",function(){
    $("#modal-overlay").remove();
    $("body").removeClass("overlay");
  });
});



const Target = $('.is-empty');
$(Target).on('change', function(){
  if ($(Target).val() !== ""){
    $(this).removeClass('is-empty');
  } else {
    $(this).addClass('is-empty');
  }
});