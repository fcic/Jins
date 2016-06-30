$(function(){
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
//      effect: 'flip',
         onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		  }, 
		  onSlideChangeEnd: function(swiper){ 
		    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		  } 
		   
    });
	
	$('.musicbox').click(function(){
		console.info($('.musics'))
		if($('.music')[0].paused){
			$('.music')[0].play();
			$(this).addClass('musicplay')
		}else{
			$('.music')[0].pause();
			$(this).removeClass('musicplay')
		}
	})
	
			
})