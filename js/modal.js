$("#modal-open").click(
	function(){
    // overlay作成
    $(this).blur() ;
    if($("#modal-overlay")[0]) return false ;
    $("body").append('<div id="modal-overlay"></div>');
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