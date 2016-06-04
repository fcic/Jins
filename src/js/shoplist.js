$(function(){
	(function(){
		var item = $(".item");
		var size = item.length;
			$.ajax({
			url:"http://datainfo.duapp.com/shopdata/getGoods.php",
			type:"get",
			dataType:"jsonp",
			jsonp:"callback",
			success:function(data){
				for(var i = 0;i<size;i++){
					var temp = $(".item").eq(i);
					temp.find("img").attr("src",data[i].goodsListImg);
					temp.find("p").html(data[i].className);
					temp.find("span").html("￥"+data[i].price);
				}
			}
		});
	})();
	
})











