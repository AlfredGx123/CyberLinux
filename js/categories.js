// Import commands from script.js (will be available globally)
// Categories page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Calculate actual command counts per category
    const categoryCounts = {
        navigation: 0,
        network: 0,
        security: 0,
        permissions: 0,
        monitoring: 0,
        forensics: 0
    };
    
    // Count commands in each category from the commands array
    if (typeof commands !== 'undefined') {
        commands.forEach(cmd => {
            if (categoryCounts.hasOwnProperty(cmd.category)) {
                categoryCounts[cmd.category]++;
            }
        });
        
        // Update the category badges with actual counts
        document.querySelectorAll('.category-card').forEach(card => {
            const category = card.getAttribute('data-category');
            const badge = card.querySelector('.category-badge');
            if (badge && categoryCounts[category] !== undefined) {
                badge.textContent = `${categoryCounts[category]} Commands`;
            }
        });
    }
    
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            // Store the selected category in localStorage
            localStorage.setItem('selectedCategory', category);
            // Redirect to home page and trigger filter
            window.location.href = `../index.html?category=${category}#commands`;
        });
    });
    
    // Scroll to top button functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 600) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
        
        // Scroll to top when button is clicked
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
