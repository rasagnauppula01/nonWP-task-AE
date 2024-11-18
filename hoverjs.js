document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    const container = document.querySelector('.container');
    
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            // Change background color of card
            card.style.backgroundColor = 'red';
            card.querySelector('.card-body').style.color = 'white';
            // Change background color of icon
            card.querySelector('#icon').style.backgroundColor = 'red';
            // Change text color of btn-primary
            card.querySelector('.btn-primary').style.backgroundColor = 'black';
            card.querySelector('.btn-primary').style.color = 'white';
            // Change background color of container
            container.style.backgroundColor = 'white';
            container.style.color = 'black';
        });

        card.addEventListener('mouseout', () => {
            // Reset background color of card
            card.style.backgroundColor = 'white';
            card.querySelector('.card-body').style.color = '#171616';
            // Reset background color of icon
            card.querySelector('#icon').style.backgroundColor = '#ffffff';
            // Reset text color of btn-primary
            card.querySelector('.btn-primary').style.backgroundColor = '#FF3B00';
            card.querySelector('.btn-primary').style.color = 'white';
            // Reset background color of container
            container.style.backgroundColor = 'transparent';
            container.style.color = 'inherit';
        });
    });
});
