document.addEventListener('DOMContentLoaded', function() {
    // FAQ Functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', function() {
            item.classList.toggle('active');

            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });

    // Product Rating Functionality
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const stars = card.querySelectorAll('.rating-stars .star');
        const ratingValueDisplay = card.querySelector('#ratingValue');
        let currentRating = 0;

        stars.forEach(star => {
            star.addEventListener('click', function() {
                setRating(this);
            });

            star.addEventListener('mouseover', function() {
                highlightStars(this);
            });

            star.addEventListener('mouseout', function() {
                resetStars(this.parentNode);
            });
        });

        function setRating(clickedStar) {
            const rating = parseInt(clickedStar.dataset.value);
            currentRating = rating;
            ratingValueDisplay.textContent = `Your rating: ${currentRating}`;
            updateStars(clickedStar.parentNode, currentRating);
        }

        function highlightStars(hoveredStar) {
            const rating = parseInt(hoveredStar.dataset.value);
            highlight(hoveredStar.parentNode, rating);
        }

        function resetStars(ratingContainer) {
            updateStars(ratingContainer, currentRating);
        }

        function updateStars(ratingContainer, rating) {
            const starsToUpdate = ratingContainer.querySelectorAll('.star');
            starsToUpdate.forEach(star => {
                const starValue = parseInt(star.dataset.value);
                if (starValue <= rating) {
                    star.classList.add('selected');
                } else {
                    star.classList.remove('selected');
                }
            });
        }

        function highlight(ratingContainer, rating) {
            const starsToHighlight = ratingContainer.querySelectorAll('.star');
            starsToHighlight.forEach(star => {
                const starValue = parseInt(star.dataset.value);
                if (starValue <= rating) {
                    star.style.color = '#e0f312';
                    star.style.transform = 'scale(1.2)';
                } else {
                    star.style.color = '#ccc';
                    star.style.transform = 'scale(1)';
                }
            });
        }
    });
});