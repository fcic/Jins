$(function(){
	(function(){
		function initData(){
			var src = localStorage.getItem("userimg_url");
			var img = $(".userimg img");
			img.attr("src",src);
			var name =  localStorage.getItem("userID");
			$(".userinfo span").eq(0).html(name);
		}
		initData();
	})();
})