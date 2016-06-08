window.onload = function () {
    
    function init(){
    	var ls = window.localStorage.getItem("currentPage"); 
    	$.ajax({
        url: "html/"+ls+".html",
        type: "get",
        success: function (data) {
            $("section").html("");
            $("section").append(data);
            if (ls=="home") {
            	swi();
           		initItemList();
            }
            var active = $(".menu[data-route="+ls+"]");
            active.addClass("menu-color");
            var span = $(".active-menu");
            span.css("left",active.attr("data-left"));
            $("section").attr("data-check",ls);
        }
    })
    }
    init();
    function swi() {
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: 3000,
            pagination: '.swiper-pagination',
            autoplayDisableOnInteraction: false,
        })
    }
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
 
    function getAhax(url, check, home) {
        $.ajax({
            url: url,
            type: "get",
            success: function (data) {
                var section = $("section");
                section.html("");
                section.append(data);
                section.attr("data-check", check);
                saveCurrentPage(check);
                if (!home == undefined || !home == null || !home == "") {
                    swi();
                    initItemList();
                }
            }
        })
    };
    function saveCurrentPage(node){
    	window.localStorage.setItem("currentPage",node);
    }

    ;(function () {
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
                a.removeClass("menu-color");
                $(this).addClass("menu-color");
                if (!(section.attr("data-check") == route)) {
                    getAhax("html/home.html", "home", 1);
                }
                break;
            case "classfy":
                active.css("left", "20%");
                a.removeClass("menu-color");
                $(this).addClass("menu-color");
                if (!(section.attr("data-check") == route)) {
                    getAhax("html/classfy.html", "classfy");
                }
                break;
            case "shopcar":
                active.css("left", "40%");
                a.removeClass("menu-color");
                $(this).addClass("menu-color");
                if (!(section.attr("data-check") == route)) {
                    getAhax("html/shopcar.html", "shopcar");
                }
                break;
            case "myshow":
                active.css("left", "60%");
                a.removeClass("menu-color");
                $(this).addClass("menu-color");
                if (!(section.attr("data-check") == route)) {
                    getAhax("html/myshow.html", "myshow");
                }
                break;
            case "more":
                active.css("left", "80%");
                a.removeClass("menu-color");
                $(this).addClass("menu-color");
                if (!(section.attr("data-check") == route)) {
                    getAhax("html/more.html", "more");
                }
                break;
            }
        })
    })();
}