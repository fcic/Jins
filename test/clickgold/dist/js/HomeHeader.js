define(function(require, exports, module) {
  require('../css/HomeHeader.css');
  var HomeHeader = React.createClass({displayName: "HomeHeader",
  	render:function(){
  		return(
  				React.createElement("div", {className: "HomeHeader"}, 
            React.createElement("div", {className: "bannerLeft"}, 
              React.createElement("img", {src: "./img/logo.png", className: "logo"})
            ), 
            React.createElement("div", {className: "bannerRight"}, 
              React.createElement("a", {className: "signup", href: ""}, "注册"), 
              React.createElement("a", {className: "login", href: ""}, "登录")
            )
  				)
  		)
  	}
  });
  module.exports=HomeHeader;
});