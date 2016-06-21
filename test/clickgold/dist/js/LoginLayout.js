define(function(require, exports, module) {
  var LoginHeader = require('./LoginHeader');
  var LoginBody = require('./LoginBody');
  var LoginLayout = React.createClass({displayName: "LoginLayout",
  	render:function(){
  		return(
  				React.createElement("div", {className: "LoginLayout"}, 
            		React.createElement(LoginHeader, null), 
            		React.createElement(LoginBody, null)
  				)
  		)
  	}
  });
module.exports=LoginLayout;
	
});