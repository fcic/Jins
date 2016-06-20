define(function(require, exports, module) {
  require('../css/HomeMain.css');
  var HomeMain = React.createClass({displayName: "HomeMain",
  	render:function(){
  		return(
  				React.createElement("div", {className: "HomeMain"}, 
            React.createElement("div", {className: "mainLeft"}, 
              React.createElement("a", {href: "", className: "invide"}, 
                React.createElement("div", {className: "invideLeft"}, 
                  React.createElement("img", {src: "./img/yaoqinghaoyou.png"})
                ), 
                React.createElement("div", {className: "invideRight"}, 
                  React.createElement("p", null, "邀请新好友"), 
                  React.createElement("p", null, "+3.0", React.createElement("span", null, "元"))
                )
              ), 
              React.createElement("a", {href: "", className: "prize"}, 
                React.createElement("div", {className: "prizeLeft"}, 
                  React.createElement("p", null, "每日砸金蛋"), 
                  React.createElement("p", null, "收益翻倍")
                ), 
                React.createElement("div", {className: "prizeRight"}, 
                  React.createElement("img", {src: "./img/zadan.png"})
                )
              )
            ), 
            React.createElement("div", {className: "mainRight"}, 
              React.createElement("a", {href: "", className: "money"}, 
                React.createElement("div", {className: "moneyLeft"}, 
                  React.createElement("p", null, "分享赚钱"), 
                  React.createElement("p", null, "拉流量赚现金", React.createElement("br", null), "奖金无上限")
                ), 
                React.createElement("div", {className: "moneyRight"}, 
                  React.createElement("img", {src: "./img/fenxiangzhuanqian.png"})
                )
              ), 
              React.createElement("a", {href: "", className: "data"}, 
                React.createElement("div", {className: "dataLeft"}, 
                  React.createElement("img", {src: "./img/gerenxinxi.png"})
                ), 
                React.createElement("div", {className: "dataRight"}, 
                  React.createElement("p", null, "完善个人资料"), 
                  React.createElement("p", null, "+2.0", React.createElement("span", null, "元"))
                )
              )
            )
  				)
  		)
  	}
  });
  module.exports=HomeMain;
});