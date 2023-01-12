console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted successfully.');
}

function imgMouseover(){
	alert('I am cute.')
}


let form = document.querySelector('#contact');
let image = document.querySelector('img');

form.addEventListener('submit', handleSubmit);
image.addEventListener('mouseover', imgMouseover);