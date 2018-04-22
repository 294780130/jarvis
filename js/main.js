// JavaScript Document

//以下部分实现鼠标移到轮播图上显示左右切换按钮，鼠标移开则消失
$(function (){
	 $('#carousel').mouseover(function(){
		$('#left').removeClass('unable');
		$('#right').removeClass('unable');
	 });
	$('#carousel').mouseout(function(){
		$('#left').addClass('unable');
		$('#right').addClass('unable');
	 });
});

//以下部分实现页面不在最顶部时显示返回顶部按钮，在最顶部时按钮消失
window.onscroll = function() { 
	if(window.scrollY==0){
		$('#go_top').addClass('unable');
		$('.nav_right').addClass('unable');
	}
	else{
		$('#go_top').removeClass('unable');
	}
	if(window.scrollY>640 && window.scrollY<7800){
		$('.nav_right').removeClass('unable');
	}
	else{
		$('.nav_right').addClass('unable');
	}
	//console.log(window.scrollY);
} 


var $navs = $('.nav_right a'),          // 导航
  $sections = $('.category_box'),       // 模块
  $window = $(window),
  navLength = $navs.length - 1;
   
$window.on('scroll', function() {
  var scrollTop = $window.scrollTop()+120,
    len = navLength;
 
  for (; len > -1; len--) {
    var that = $sections.eq(len);
    if (scrollTop >= that.offset().top) {
       $navs.removeClass('current').eq(len).addClass('current');
       break;
    }
  }
});	

$navs.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({
    'scrollTop': $($(this).attr('href')).offset().top-110
  }, 400);
});

$("#go_top").on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({
    'scrollTop': $('body').offset().top
  }, 400);
});

$(function (){
	 $('.category_box ul li').mouseover(function(){
		$(this).addClass('hov');
	 });
	$('.category_box ul li').mouseout(function(){
		$(this).removeClass('hov');
	 });
});