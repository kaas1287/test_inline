export const reviewsBatton = document.getElementById('reviewsBatton');
const reviewsContent = document.getElementsByClassName('reviews-content');
const mainContent = document.getElementsByClassName('main-content');
const alsoBuy = document.getElementsByClassName('also-buy');
const fromContent = document.getElementsByClassName('from-content');
reviewsBatton.addEventListener('click', function () {
    mainContent[0].style.display = 'none';
    alsoBuy[0].style.display = 'none';
    reviewsContent[0].style.display = 'block';
    fromContent[0].style.display = 'none';
    });

