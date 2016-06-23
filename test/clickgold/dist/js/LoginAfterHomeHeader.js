define(function(require, exports, module) {
  require('../css/LoginAfterHomeHeader.css');
  var LoginAfterHomeHeader = React.createClass({displayName: "LoginAfterHomeHeader",
  	render:function(){
  		return(
  				  React.createElement("div", {className: "LoginAfterHomeHeader"}, 
              React.createElement("div", {className: "LoginAfterHomeHeaderLeft"}, 
                React.createElement("p", null, 
                  React.createElement("img", {src: "./img/zhuanqian.png"}), 
                  React.createElement("span", {className: "trueMoney-line-height"}, "我赚的钱")
                ), React.createElement("br", null), 
                React.createElement("p", {className: "trueMoney"}, 
                  React.createElement("span", null, "5.15"), React.createElement("span", null, "元")
                )
              ), 
              React.createElement("div", {className: "LoginAfterHomeHeaderRight"}, 
                React.createElement("p", null, 
                  React.createElement("img", {src: "./img/shouyi.png"}), 
                  React.createElement("span", null, "今日收益+5.00")
                ), React.createElement("br", null), 
                React.createElement("a", null, "查看明细")
              )
            )
  		)
  	}
  });
  module.exports=LoginAfterHomeHeader;
});