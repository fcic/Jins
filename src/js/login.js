$(function(){
	// 发送数据
		(function(){
			var sendMsg = function(name,pwd){
			$.ajax({
				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				data:{
					status:"login",
					userID:name,
					password:pwd
				},
				type:"post",
				success:function(data){
					if (data==0) {
						$(".alert").css("display","flex").find("p").eq(1).html("用户名不存在");
					}else if(data==2){
						$(".alert").css("display","flex").find("p").eq(1).html("用户名或密码错误");
					}else{
						savaUser(data);
						window.location.href="usermanage.html";
					}
				}
			});
		}
		$(".login").click(function(){
			var name = $("#name").val();
			var pwd = $("#pwd").val();
			sendMsg(name,pwd);
		});
	})();

	//显示密码
	(function(){
		var show = $("#showpwd");
		var pwd = $("#pwd")
		show.change(function(){
			var bool = $(this)[0].checked;
			if (bool) {
				pwd.attr("type","text");
			}else{
				pwd.attr("type","password");
			}
		});
	})();
	$(document).click(function(){
		$(".alert").hide();
	});
	var savaUser = function(data){
		var data = JSON.parse(data);
		localStorage.setItem("code",data.code);
		localStorage.setItem("userID",data.userID);
		localStorage.setItem("userimg_url",data.userimg_url);
	}
});