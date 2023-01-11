function slider(){
	
	window.timersId=window.setInterval(timer ,1000);
}
function timer(){
	let slider1=document.getElementById('slider1');
	let slider2=document.getElementById('slider2');
	let slider3=document.getElementById('slider3');
	let slider4=document.getElementById('slider4');
	let slider5=document.getElementById('slider5');
	let tmp=slider1.src;
	slider1.src=slider2.src;
	slider2.src=slider3.src;
	slider3.src=slider4.src;
	slider4.src=slider5.src;
	slider5.src=tmp;
}