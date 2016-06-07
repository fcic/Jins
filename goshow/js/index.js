window.onload=function(){
	var mySwiper = new Swiper('.swiper-container', {
	autoplay: 3000,
	 pagination: '.swiper-pagination',
	 autoplayDisableOnInteraction : false,
})
	$.ajax({
		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
		type:"get",
		success:function(data){
			var index =  data.indexOf("(");
			 data = data.substring(index+1,data.length-1);
			 data = JSON.parse(data);
			 var temp = "";
			 for(var i = 0;i<data.length;i++){
			 	temp += '<div class="item">'
				+'<img src="'+data[i].goodsListImg +'" class="item-img">'
				+'<div class="item-info">'
					+'<p class="item-title">'+data[i].goodsName+'</p>'
					+'<div class="item-left">'
						+'<p><span>￥'+data[i].price+'</span><span><del>￥secret</del></span></p>'
						+'<span class="discount">'+data[i].discount+'折</span>'
					+'</div><div class="item-right"><a class="icon" href="#"><i class="iconfont">&#xe603;</i></a></div></div></div>';
			 }
			 $(".item-group").append(temp);
		}
	});
}
