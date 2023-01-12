let colorBtn = document.getElementById('color');
let placeBtn = document.querySelector('#place');
let ritualBtn = document.getElementById('ritual');

function color(){
    alert('My favorite color is green.')
}
function place(){
    alert('My favorite place is my bed.')
}
function ritual(){
    alert('My favorite ritual is playing games.')
}

colorBtn.addEventListener('click', color)
placeBtn.addEventListener('click', place)
ritualBtn.addEventListener('click', ritual)