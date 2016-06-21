define(function(require, exports, module) {
  require('../css/LoginHeader.css');
  var LoginHeader = React.createClass({displayName: "LoginHeader",
  	render:function(){
  		return(
  				React.createElement("div", {className: "LoginHeader"}, 
            React.createElement("a", null, React.createElement("img", {src: "./img/zuojiantou.png"})), 
            React.createElement("span", null, "账号登录")
  				)
  		)
  	},
    componentDidMount:function(){
      $('.LoginHeader a').on('tap',function(){
        var Layout = require('./Layout');
        ReactDOM.unmountComponentAtNode(document.body);
        ReactDOM.render(React.createElement(Layout, null),document.body);
      })
    }
  });
module.exports=LoginHeader;
});