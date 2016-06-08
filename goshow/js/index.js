window.onload = function () {
    function swi() {
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: 3000,
            pagination: '.swiper-pagination',
            autoplayDisableOnInteraction: false,
        })
    }
    $.ajax({
        url: "html/home.html",
        type: "get",
        success: function (data) {
            $("section").html("");
            $("section").append(data);
            swi();
			initItemList();
        }
    })
 
    function initItemList() {
        $.ajax({
            url: "http://datainfo.duapp.com/shopdata/getGoods.php",
            type: "get",
            success: function (data) {
                var index = data.indexOf("(");
                data = data.substring(index + 1, data.length - 1);
                data = JSON.parse(data);
                var temp = "";
                for (var i = 0; i < data.length; i++) {
                    temp += '<div class="item">' + '<img src="' + data[i].goodsListImg + '" class="item-img">' +
                        '<div class="item-info">' + '<p class="item-title">' + data[i].goodsName + '</p>' +
                        '<div class="item-left">' + '<p><span>￥' + data[i].price +
                        '</span><span><del>￥secret</del></span></p>' + '<span class="discount">' + data[i].discount +
                        '折</span>' +
                        '</div><div class="item-right"><a class="icon" href="#"><i class="iconfont"></i></a></div></div></div>';
                }
                $(".item-group").append(temp);
            }
        });
 
 
 
    }
 
    function ajaxHome() {
        $.ajax({
            url: "html/home.html",
            type: "get",
            success: function (data) {
            	var section = $("section");
                section.html("");
               	section.append(data);
               	section.attr("data-check","home")
                swi();
                initItemList();
            }
        })
    }
    function ajaxClassfy() {
        $.ajax({
            url: "html/classfy.html",
            type: "get",
            success: function (data) {
               var section =  $("section");
                section.html("");
               	section.append(data);
               	section.attr("data-check","classfy")
            }
        })
    }
	function ajaxShopcar() {
        $.ajax({
            url: "html/shopcar.html",
            type: "get",
            success: function (data) {
               var section =  $("section");
                section.html("");
               	section.append(data);
               	section.attr("data-check","shopcar");
               }
        })
    } 
    function ajaxMyshow() {
        $.ajax({
            url: "html/myshow.html",
            type: "get",
            success: function (data) {
               var section =  $("section");
                section.html("");
               	section.append(data);
               	section.attr("data-check","myshow")
               }
        })
    } 
    function ajaxMore() {
        $.ajax({
            url: "html/more.html",
            type: "get",
            success: function (data) {
               var section =  $("section");
                section.html("");
               	section.append(data);
               	section.attr("data-check","more")
            }
        })
    } 
 
    ;
    (function () {
        var footer = $("footer");
        var a = $(".menu");
        var active = $(".active-menu");
        var classfy = "<h1>This is classfy!</h1>";
        var shopcar = "<h1>This is shopcar!</h1>";
        var myshow = "<h1>This is myshow!</h1>";
        var more = "<h1>This is more!</h1>";
        var section = $("section");
        footer.on("click", "a", function () {
            var route = $(this).attr("data-route");
            switch (route) {
            case "home":
                active.css("left", "0");
                if(!(section.attr("data-check")==route)){
                	ajaxHome();
                }
                break;
            case "classfy":
                active.css("left", "20%");
                if(!(section.attr("data-check")==route)){
                ajaxClassfy();
                }
                break;
            case "shopcar":
                active.css("left", "40%");
                if(!(section.attr("data-check")==route)){
                ajaxShopcar();
                }
                break;
            case "myshow":
                active.css("left", "60%");
                if(!(section.attr("data-check")==route)){
                ajaxMyshow();
                }
                break;
            case "more":
                active.css("left", "80%");
                if(!(section.attr("data-check")==route)){
                ajaxMore();
                }
                break;
            }
        })
    })();
}