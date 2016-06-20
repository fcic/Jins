define(function(require, exports, module) {
  require('../css/HomeBanner.css');
  require('../../lib/swiper-3.3.1.min.css');
  var HomeBanner = React.createClass({displayName: "HomeBanner",
    componentDidMount:function(){
        var mySwiper = new Swiper ('.swiper-container', {
          autoplay: 2000,
          pagination: '.swiper-pagination',
          autoplayDisableOnInteraction:false
        })      
    },
  	render:function(){
  		return(
  				React.createElement("div", {className: "HomeBanner"}, 
            React.createElement("div", {className: "swiper-container"}, 
              React.createElement("div", {className: "swiper-wrapper"}, 
                  React.createElement("div", {className: "swiper-slide"}, React.createElement("img", {src: "./img/b1.jpg"})), 
                  React.createElement("div", {className: "swiper-slide"}, React.createElement("img", {src: "./img/b2.jpg"})), 
                  React.createElement("div", {className: "swiper-slide"}, React.createElement("img", {src: "./img/b3.jpg"}))
              ), 
              React.createElement("div", {className: "swiper-pagination"})
              )
  				)
  		)
  	}
  });
  module.exports=HomeBanner;
});