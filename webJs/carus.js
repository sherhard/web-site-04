function gotimer(){
		window.timerId=window.setInterval(timer ,1000);
	}

	function timer(){
		if(window.number == undefined || window.number==3){
			window.number=1;
		}else window.number=window.number+1;
		let img=document.getElementById('carusel');
		img.src='web_img/carusel/'+window.number+'.jpg'
	}

