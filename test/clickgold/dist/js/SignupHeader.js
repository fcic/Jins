define(function(require, exports, module) {
  require('../css/SignupHeader.css');
  var SignupHeader = React.createClass({displayName: "SignupHeader",
  	render:function(){
  		return(
  				React.createElement("div", {className: "SignupHeader"}, 
            React.createElement("a", null, React.createElement("img", {src: "./img/zuojiantou.png"})), 
            React.createElement("span", null, "注册")
  				)
  		)
  	},
    componentDidMount:function(){
      $('.SignupHeader a').on('tap',function(){
        var Layout = require('./Layout');
        ReactDOM.unmountComponentAtNode(document.body);
        ReactDOM.render(React.createElement(Layout, null),document.body);
      })
    }
  });
module.exports=SignupHeader;
});