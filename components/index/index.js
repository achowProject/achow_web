$(document).ready(function(e) {
	//banner切换
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true
    });
//  var myIndexSwiper = new Swiper('.swiper-container', {
//		autoplay: 2000, //可选选项，自动滑动
//		initialSlide: 0,
//		speed: 400,
//		autoplayDisableOnInteraction: false,
//		height: 300,
//		loop: true,
//		observer: true,
//		pagination: '.swiper-pagination',
//		paginationClickable: true,
//	});
	
	//关闭 modal 
	$(".modal .icon-guanbi").click(function(){
		$(this).parent().fadeOut(200);
		$(".modal").fadeOut(200);
	});
	
	//登录
	$(".btn-entry").click(function(){
		$(".modal").fadeIn(200);
		$(".modal").find(".register-content").hide();
		$(".modal").find(".modify-content").hide();
		$(".modal").find(".login-content").fadeIn();
	});
	
	//注册
	$(".btn-enroll").click(function(){
		$(".modal").fadeIn(200);
		$(".modal").find(".login-content").hide().find(".modify-content").hide();
		$(".modal").find(".register-content").fadeIn();
	});
	
	//修改密码
	$(".btn-forget").click(function(){
		$(".modal").fadeIn(200);
		$(".modal").find(".login-content").hide().find(".register-content").hide();
		$(".modal").find(".modify-content").fadeIn();
	});
});



//登录层


//注册