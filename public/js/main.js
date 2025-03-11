document.addEventListener('DOMContentLoaded', () => {
    const navigationButtons = document.querySelectorAll('.guide-nav-button');
    
    navigationButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (button.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
});