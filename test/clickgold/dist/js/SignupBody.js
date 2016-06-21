define(function(require, exports, module) {
  require('../css/SignupBody.css');
  var SignupBody = React.createClass({displayName: "SignupBody",
  	render:function(){
  		return(
  				React.createElement("div", {className: "SignupBody"}, 
            React.createElement("p", {className: "selectSign"}, React.createElement("a", null, React.createElement("img", {src: "./img/duigou2.png"}), React.createElement("span", null, "我要赚钱")), React.createElement("a", null, React.createElement("img", {src: "./img/duigou3.png"}), React.createElement("span", null, "我要流量"))), 
            React.createElement("input", {type: "text", placeholder: "请输入手机号码"}), 
            React.createElement("a", {className: "loginButton"}, "下一步"), 
            React.createElement("p", null, "注册即视为同意点金手", React.createElement("a", null, "平台服务协议"))
  				)
  		)
  	},
    componentDidMount:function(){
      $('.selectSign a').on('tap',function(e){
        var bool = $(this).find('img').attr('src').indexOf('2');
          if(bool=='-1'){
          $(this).find('img').attr('src','./img/duigou2.png');
          $(this).siblings().find('img').prop('src','./img/duigou3.png');
        }
      })
    }
  });
module.exports=SignupBody;
});