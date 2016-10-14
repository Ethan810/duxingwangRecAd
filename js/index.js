(function(){
	var mySwiper = new Swiper ('.swiper-container', {
		direction:'vertical',
		pagination:'.swiper-pagination',
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		}, 
		onSlideChangeEnd: function(swiper){ 
		    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		} 
	})   
	
	var docEl = document.documentElement;
	var resizeEvt = 'orientation' in window ? 'orientationchange' : 'resize';
	//在手机端有window.orientation属性，当前设备的屏幕方向，0表示竖屏，正负90度表示横屏
	var recalc = function(){
		var clientWidth = docEl.clientWidth;
		
		if(!clientWidth) return;
		//20,是scss定义的变量，就是计算rem基准
		//640  是设计图的宽度
		docEl.style.fontSize = 20 * clientWidth / 640 +'px';
	};
	
	if(!document.addEventListener) return;
	window.addEventListener(resizeEvt,recalc,false);
	//dom 节点加载完成后就会执行回调函数  DOMContentLoaded
	//(img 图片，script加载完成后，dom节点创建，css)window.onload
	document.addEventListener('DOMContentLoaded',recalc,false);
	
	//音乐控制
	var oAudio = document.getElementById("myaudio");
	var oMusic = document.getElementById("music");
	var oMusic_bg = document.getElementById("music_bg");
	$("#music").on('click',function(){
		if(oAudio.paused){
			oMusic.style.animationPlayState = "running";
			oAudio.play();
			oMusic_bg.style.display = "block";
		}else{
			oMusic.style.animationPlayState = "paused";
			oAudio.pause();
			oMusic_bg.style.display = "none";
		}
	})
})();