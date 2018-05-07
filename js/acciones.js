// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('#beep').tap(function(){
			navigator.notification.beep(2);
		}); //cierre del beep
		$('#vibrar').tap(function(){
			navigator.notificacion.vibrate(2000);
		}); //cierre del vibrar
	},false);//cierre del deviceready
});//cierre ready