function btn_menu(){
			let elem=document.getElementById('elem');
			if(elem.style.display=='none'){
				elem.style.display='block';
			}else{
				elem.style.display='none'
			}
		}

function btn_slid_text(){
	let elem=document.getElementsByClassName('head_text_bg');
		for(let i=0; i<elem.length; i++){
			if(elem[i].style.display=='none'){
				elem[i].style.display='block';
			}else{
				elem[i].style.display='none'
			}
		}
}

function form_01(elem_01){
	let elem=document.getElementById('form_text');
	elem.value=elem_01.value;
}
function form_02(elem_02){
	let elem=document.getElementById('form_text_01');
	elem.value=elem_02.value;
}

function clik(){
		let avatar=document.getElementById('img_avatar');
		avatar.src="web_img/970x647/01.jpg";
	}

function clik2(){
		let avatar=document.getElementById('img_avatar');
		avatar.src="web_img/970x647/02.jpg";

	}
	function clik3(){
		let avatar=document.getElementById('img_avatar');
		avatar.src="web_img/970x647/03.jpg";

	}
	function clik4(){
		let avatar=document.getElementById('img_avatar');
		avatar.src="web_img/970x647/01.jpg";

	}






	