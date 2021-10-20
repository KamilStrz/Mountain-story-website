/* Menu - show and hide */

const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuList = document.querySelector('.menu-list');

hamburgerMenu.addEventListener('click' , showMenu);

function showMenu() {
    menuList.classList.toggle("active-menu");
}

/* Change article and number of article */

let changeNumber = document.querySelector('#menu-number');
const showFirstArticle = document.querySelector('#show-first-article');
const showSecondArticle = document.querySelector('#show-second-article');
const showThirdArticle = document.querySelector('#show-third-article');
const firstArticle = document.querySelectorAll('.first-article');
const secondArticle = document.querySelectorAll('.second-article');
const thirdArticle = document.querySelectorAll('.third-article');


showFirstArticle.addEventListener('click' , ()=> {
    changeNumber.innerHTML = '01';

    for ( i=0 ; i < secondArticle.length && i <thirdArticle.length ; i++) {
        secondArticle[i].style.display = 'none';
        thirdArticle[i].style.display = 'none';
        firstArticle[i].style.display = 'block';
        }

    showFirstArticle.style.backgroundColor = 'white';
    showSecondArticle.style.backgroundColor = 'rgb(71, 67, 67)';
    showThirdArticle.style.backgroundColor = 'rgb(71, 67, 67)';
} )

showSecondArticle.addEventListener('click' , ()=> {
    changeNumber.innerHTML = '02';
    
    for ( i=0 ; i < firstArticle.length && i <thirdArticle.length ; i++) {
        firstArticle[i].style.display = 'none';
        thirdArticle[i].style.display = 'none';
        secondArticle[i].style.display = 'block';
        }

    showSecondArticle.style.backgroundColor = 'white';
    showFirstArticle.style.backgroundColor = 'rgb(71, 67, 67)';
    showThirdArticle.style.backgroundColor = 'rgb(71, 67, 67)';
    
} )

showThirdArticle.addEventListener('click' , ()=> {
    changeNumber.innerHTML = '03';

    for ( i=0 ; i < firstArticle.length && i <secondArticle.length ; i++) {
        firstArticle[i].style.display = 'none';
        secondArticle[i].style.display = 'none';
        thirdArticle[i].style.display = 'block';
        }

        showThirdArticle.style.backgroundColor = 'white';
        showFirstArticle.style.backgroundColor = 'rgb(71, 67, 67)';
        showSecondArticle.style.backgroundColor = 'rgb(71, 67, 67)';
} )
