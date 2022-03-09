const   modalActiveButton = document.querySelector('.modal-active-button'),
        modalActiveAgry = document.querySelector('.modal-active-agry'),
        politics = document.querySelector('.politics');
let stor =  localStorage.getItem('politicts');
if(stor === 'ok'){
    politics.classList.add('unactive');

}
modalActiveButton.addEventListener('click', () => {
    politics.classList.add('hide');
})
modalActiveAgry.addEventListener('click', () => {
    localStorage.setItem('politicts', 'ok')
    politics.classList.add('hide');
})