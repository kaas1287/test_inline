export const fromBatton = document.getElementById('fromBatton');
const reviewsContent = document.getElementsByClassName('reviews-content');
const mainContent = document.getElementsByClassName('main-content');
const alsoBuy = document.getElementsByClassName('also-buy');
const fromContent = document.getElementsByClassName('from-content');
fromBatton.addEventListener('click', function () {
    mainContent[0].style.display = 'none';
    alsoBuy[0].style.display = 'none';
    reviewsContent[0].style.display = 'none';
    fromContent[0].style.display = 'flex';
    });