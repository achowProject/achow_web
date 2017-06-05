$(function(){
	$(".btn-more").click(function(){
		var _html = $(this).html();
		if (_html == "更多") {
			$(this).html("收起");
			$(".top-list").find(".other-list").slideDown(200);
		} else{
			$(this).html("更多");
			$(".top-list").find(".other-list").slideUp(200);
		}
	});
});
