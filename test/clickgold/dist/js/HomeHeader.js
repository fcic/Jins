define(function(require, exports, module) {
  require('../css/HomeHeader.css');
  var LoginLayout = require('./LoginLayout');
  var HomeHeader = React.createClass({displayName: "HomeHeader",
  	render:function(){
  		return(
  				React.createElement("div", {className: "HomeHeader"}, 
            React.createElement("div", {className: "bannerLeft"}, 
              React.createElement("img", {src: "./img/logo.png", className: "logo"})
            ), 
            React.createElement("div", {className: "bannerRight"}, 
              React.createElement("a", {className: "signup"}, "注册"), 
              React.createElement("a", {className: "login"}, "登录")
            )
  				)
  		)
  	},
    componentDidMount:function(){
      $('.bannerRight a').on('tap',function(e){
        var className = $(this).prop('className');
        switch(className){
          case 'signup': 
          console.log(1);
          break;
          case 'login':
          ReactDOM.unmountComponentAtNode(document.body);
          ReactDOM.render(React.createElement(LoginLayout, null),document.body);
          break;
        }
      })
    }
  });
  module.exports=HomeHeader;
});