//Concerts
document.querySelector('#concert-button1').addEventListener('click', clickBuy);
document.querySelector('#concert-button2').addEventListener('click', clickBuy);
document.querySelector('#concert-button3').addEventListener('click', clickBuy);
document.querySelector('#concert-button4').addEventListener('click', clickBuy);

function clickBuy (e) {
    e.target.style.display = "none";
    e.target.nextElementSibling.style.display = "block";
}

document.querySelector('.contact__form').addEventListener('submit', submitForm);

//Formularz
function submitForm(e) {
    e.preventDefault();
    const form = e.target;
    console.log(form.email.value);
    console.log(form.topic.value);
}

//Hamburger menu
const ham = document.querySelector('.hamburgerIcon');
const menu = document.querySelector(".page-navigation");
const cross = document.querySelector('.crossIcon');

ham.addEventListener('click', showMenu);
cross.addEventListener('click', hideMenu);

function showMenu() {
        menu.style.display = "block";
        ham.style.display = "none";
        cross.style.display = "block";
}

function hideMenu() {
        menu.style.display = "none";
        cross.style.display = "none";
        ham.style.display = "block";
}


