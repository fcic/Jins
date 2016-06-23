define(function(require, exports, module) {
  require('../css/SignupBody.css');
  var LoginLayout = require('./LoginLayout')
  var SignupBody = React.createClass({displayName: "SignupBody",
  	render:function(){
  		return(
  				React.createElement("div", {className: "SignupBody"}, 
            React.createElement("p", {className: "selectSign"}, React.createElement("a", null, React.createElement("img", {src: "./img/duigou2.png"}), React.createElement("span", null, "我要赚钱")), React.createElement("a", null, React.createElement("img", {src: "./img/duigou3.png"}), React.createElement("span", null, "我要流量"))), 
            React.createElement("input", {type: "text", name: "username", placeholder: "请输入手机号码/邮箱"}), 
            React.createElement("p", {className: "signupTip"}, "用户名已被注册，换一个吧！"), 
            React.createElement("input", {type: "password", name: "pwd", placeholder: "请输入密码"}), 
            React.createElement("a", {className: "loginButton"}, "确认注册"), 
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
      });
      $('.loginButton').on("tap",function(e){
        var username = $('input[name=username]').val();
        var pwd =  $('input[name=pwd]').val();
        $.ajax({
          url:'http://datainfo.duapp.com/shopdata/userinfo.php',
          type:'post',
          data:{
            "status":"register",
            'userID':username,
            'password':pwd
          },
          async:true,
          success:function(data){
            switch(data){
              case '0':
              $('.signupTip').html("用户名已被注册，换一个吧！").show();
              setTimeout(function(){
                $('.signupTip').hide();
              },2000)
              break;
              case '1':
              $('.loginButton').html('注册成功，正在跳转中...');
              ReactDOM.unmountComponentAtNode(document.body);
              ReactDOM.render(React.createElement(LoginLayout, null),document.body);
              break;
              case '2':
               $('.signupTip').html("数据库错误，请稍后再试。").show();
              setTimeout(function(){
                $('.signupTip').hide();
              },2000)
              break;
            }
          }
        })
      })
    }
  });
module.exports=SignupBody;
});