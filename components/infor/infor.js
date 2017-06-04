$(function(){
	var http_server = 'http://127.0.0.1';
	
	$(".list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	
	$(".list li a").click(function(){
		var data_type = $(this).attr("data-type");
		alert(data_type);
		$(this).addClass("on").siblings().removeClass("on");
		$.post(http_server+"newsList",function(data){
			if ( data.type == data_type) {
				var listHtml = "";
				for (var i=0;i<data.dataList.length;i++) {
					var listHtml += '<li><span>'+data.time[i]+'</span><a href="javascript:;">'+data.dataList[i]+'</a></li>';
				}
				$(".cont-list ul").append(listHtml);
			}
		});
	})
});
