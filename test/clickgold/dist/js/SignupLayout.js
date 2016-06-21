define(function(require, exports, module) {
  var SignupHeader = require('./SignupHeader');
  var SignupBody = require('./SignupBody');
  var SignupLayout = React.createClass({displayName: "SignupLayout",
  	render:function(){
  		return(
  				React.createElement("div", {className: "SignupLayout"}, 
            		React.createElement(SignupHeader, null), 
            		React.createElement(SignupBody, null)
  				)
  		)
  	}
  });
module.exports=SignupLayout;
	
});