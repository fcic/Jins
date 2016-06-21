define(function(require, exports, module) {
  require('../css/reset.css');
  var HomeHeader = require('./HomeHeader');
  var HomeBanner = require('./HomeBanner');
  var HomeMain = require('./HomeMain');
  var HomeFooter = require('./HomeFooter');
  var Layout = React.createClass({displayName: "Layout",
  	render:function(){
  		return(
  				React.createElement("div", {id: "container"}, 
            React.createElement("div", {id: "HomeHeader"}, React.createElement(HomeHeader, null)), 
            React.createElement("div", {id: "HomeBanner"}, React.createElement(HomeBanner, null)), 
            React.createElement("div", {id: "HomeMain"}, React.createElement(HomeMain, null)), 
            React.createElement("div", {id: "HomeFooter"}, React.createElement(HomeFooter, null)), 
            React.createElement("div", {className: "empty"})
  				)
  		)
  	}
  });

	ReactDOM.render(React.createElement(Layout, null),document.body);
  module.exports=Layout;
});