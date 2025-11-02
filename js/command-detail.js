// Get command data from localStorage
const commandData = JSON.parse(localStorage.getItem('selectedCommand'));

if (commandData) {
    displayCommandDetails(commandData);
} else {
    // Redirect to home if no command selected
    window.location.href = '../index.html';
}

function displayCommandDetails(cmd) {
    // Set title
    document.title = `${cmd.name} Command | CyberLinux`;
    
    // Set command name and badge
    document.getElementById('commandName').textContent = cmd.name;
    const badge = document.getElementById('commandBadge');
    badge.textContent = cmd.category;
    badge.className = `command-badge badge-${cmd.category}`;
    
    // Set basic info
    document.getElementById('commandDescription').textContent = cmd.description;
    document.getElementById('commandSyntax').textContent = cmd.syntax;
    document.getElementById('commandExample').textContent = cmd.example;
    document.getElementById('detailedDescription').textContent = cmd.detailedDescription || cmd.description;
    
    // Display options
    const optionsList = document.getElementById('optionsList');
    if (cmd.options && cmd.options.length > 0) {
        cmd.options.forEach(option => {
            const optionItem = document.createElement('div');
            optionItem.className = 'option-item';
            optionItem.innerHTML = `
                <div class="option-flag">
                    <code>${option.flag}</code>
                </div>
                <div class="option-description">
                    ${option.description}
                </div>
            `;
            optionsList.appendChild(optionItem);
        });
    } else {
        optionsList.innerHTML = '<p class="no-data">No additional options available for this command.</p>';
    }
    
    // Display use cases
    const useCasesList = document.getElementById('useCasesList');
    if (cmd.useCases && cmd.useCases.length > 0) {
        cmd.useCases.forEach((useCase, index) => {
            const useCaseItem = document.createElement('div');
            useCaseItem.className = 'usecase-item';
            useCaseItem.innerHTML = `
                <div class="usecase-number">${index + 1}</div>
                <div class="usecase-content">
                    <code>${useCase}</code>
                </div>
            `;
            useCasesList.appendChild(useCaseItem);
        });
    } else {
        useCasesList.innerHTML = '<p class="no-data">No use cases available.</p>';
    }
    
    // Display security tips if available
    if (cmd.securityTips && cmd.securityTips.length > 0) {
        const securityTips = document.getElementById('securityTips');
        const securityContent = document.getElementById('securityContent');
        securityTips.style.display = 'block';
        
        cmd.securityTips.forEach(tip => {
            const tipItem = document.createElement('div');
            tipItem.className = 'security-tip-item';
            tipItem.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <span>${tip}</span>
            `;
            securityContent.appendChild(tipItem);
        });
    }
}

// Scroll to top button functionality
document.addEventListener('DOMContentLoaded', () => {
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
