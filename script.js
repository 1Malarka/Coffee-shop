document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
        });
    });

document.getElementById('booking-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Table booked! Check back soon.');
        });

        document.getElementById('subscription-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Subscribed! Welcome to the Coffee Club!');
        });

document.querySelectorAll('.navbar a').forEach(item => {
    item.addEventListener('click', (e) => {
        if (item.classList.contains('employer-btn')) {
            return; 
        }
        e.preventDefault();
        const targetId = item.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.error(`Section ${targetId} not found!`);
        }
    });
});

document.querySelector('.logo').addEventListener('click', function() {
    window.open('https://example.com', '_blank'); 
});

// Made by malarka 22.05.2025
