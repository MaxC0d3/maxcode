const typed = new Typed('.typed', {
	strings: [
	 '<i class="iam__max">Developer</i>',
	 '<i class="iam__max">Programming lover</i>', 
	 '<i class="iam__max">Frontend</i>', 
	 '<i class="iam__max">Backend</i>'
	 ],
	 typeSpeed:75,
	 startDelay:300,
	 backSpeed:75,
	 smartBackspace:true,
	 shuffle:false,
	 backDelay: 1500,
	 loop:true,
	 loopCount: false,
	 showCursor: true,
	 cursorChar: '|',
	 contentType: 'html',

});


let cerrar = document.querySelectorAll('.close')[0];
let abrir = document.querySelectorAll('.services')[0];
let modal = document.querySelectorAll('.modal')[0];
let modalC = document.querySelectorAll('.modal-container')[0];

abrir.addEventListener("click", function(e){
	e.preventDefault();
	modalC.style.opacity = "1";
	modalC.style.visibility = "visible";
	modal.classList.toggle("modal-close");
});


cerrar.addEventListener("click", function(){
	modal.classList.toggle("modal-close");
	
	setTimeout(function(){
		modalC.style.opacity = "0";
		modalC.style.visibility = "hidden";
	},850)
});

window.addEventListener("click",function(e){
	console.log(e.target);
	if(e.target == modalC){
		modal.classList.toggle("modal-close");
		setTimeout(function(){
			modalC.style.opacity = "0";
			modalC.style.visibility = "hidden";
		},900)
	}
})