define(function(require, exports, module) {
  require('../css/HomeFooter.css');
  var HomeFooter = React.createClass({displayName: "HomeFooter",
  	render:function(){
  		return(
  				React.createElement("div", {className: "HomeFooter", id: "HomeFooter"}, 
            React.createElement("a", {className: "home"}, 
              React.createElement("img", {src: "./img/shouye.png"}), 
              React.createElement("p", null, "首页")
            ), 
            React.createElement("a", {className: "makemoney"}, 
              React.createElement("img", {src: "./img/qianbao.png"}), 
              React.createElement("p", null, "赚钱")
            ), 
            React.createElement("a", {className: "hottop"}, 
              React.createElement("img", {src: "./img/bangdan.png"}), 
              React.createElement("p", null, "榜单")
            ), 
            React.createElement("a", {className: "mime"}, 
              React.createElement("img", {src: "./img/wode.png"}), 
              React.createElement("p", null, "我的")
            )
  				)
  		)
  	},
    componentDidMount:function(){
      $('#HomeFooter a').on('click',function(e){
        console.log($(this).prop("className"));
      })
    }
  });
  module.exports=HomeFooter;
});