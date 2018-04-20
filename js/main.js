// JavaScript Document

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
