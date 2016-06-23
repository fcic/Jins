define(function(require, exports, module) {
  require('../css/LoginBody.css');
  var LoginBody = React.createClass({displayName: "LoginBody",
  	render:function(){
  		return(
  				React.createElement("div", {className: "LoginBody"}, 
            React.createElement("input", {type: "text", placeholder: "手机号/用户名/邮箱"}), 
            React.createElement("input", {type: "password", placeholder: "登录密码"}), 
            React.createElement("a", {className: "loginButton"}, "登录"), 
            React.createElement("p", null, React.createElement("b", null, "忘记密码"), React.createElement("span", null, "|"), React.createElement("b", null, "快速注册"))
  				)
  		)
  	},
    componentDidMount:function(){
        $('.loginButton').on('tap',function(e){
          var Layout = require('./Layout');
          ReactDOM.unmountComponentAtNode(document.body);
          ReactDOM.render(React.createElement(Layout, null),document.body);
          $('#HomeHeader').html("");
          var LoginAfterHomeHeader = require('./LoginAfterHomeHeader');
          ReactDOM.render(React.createElement(LoginAfterHomeHeader, null), $('#HomeHeader')[0]);
        })
    }
  });
module.exports=LoginBody;
});