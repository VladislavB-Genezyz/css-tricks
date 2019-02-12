window.onload = ()=>{
	let close = document.getElementsByClassName('close')[0];
	let show = document.getElementsByClassName('show')[0];
	console.log(close);

	close.addEventListener('click',()=>{
			document.getElementsByClassName('cardWrap')[0].classList.remove("cardWrapShow");
		document.getElementsByClassName('card')[0].classList.remove("cardShow");
		document.getElementsByClassName('cardWrap')[0].classList.add("cardWrapHide");
		document.getElementsByClassName('card')[0].classList.add("cardHide");
	})
	show.addEventListener('click',()=>{
		document.getElementsByClassName('cardWrap')[0].classList.remove('cardWrapHide')
		document.getElementsByClassName('cardWrap')[0].classList.add("cardWrapShow");
		document.getElementsByClassName('card')[0].classList.remove('cardHide')
		document.getElementsByClassName('card')[0].classList.add("cardShow");
	})
}