export const deskrButton = document.getElementById('deskrButton');
const reviewsContent = document.getElementsByClassName('reviews-content');
const mainContent = document.getElementsByClassName('main-content');
const alsoBuy = document.getElementsByClassName('also-buy');
const fromContent = document.getElementsByClassName('from-content');
deskrButton.addEventListener('click', function () {
    mainContent[0].style.display = 'block';
    alsoBuy[0].style.display = 'block';
    reviewsContent[0].style.display = 'none';
    fromContent[0].style.display = 'none';
    });
